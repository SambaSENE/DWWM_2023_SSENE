import { createApp } from 'vue';
import { Cereales } from './mesClasses/Cereales.js';
import { DbJson } from './mesClasses/dbJson.js';

const app = createApp({
    data() {
        return {
            cereals: [],
            searchQuery: '',
            selectedNutriScore: '',
            sugarFilter: false,
            saltFilter: false,
            boostFilter: false,
        };
    },
    async mounted() {
        const json = await DbJson.fetchJson('https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json');

        for (const item of json.data) {
            const cereal = new Cereales(
                item.name,
                item.calories,
                item.sucres,
                item.matieresGrasses,
                item.fibres,
                item.proteines
            );
            this.cereals.push(cereal);
        }
    },
    computed: {
        filteredCereals() {
            const filtered = this.cereals.filter(cereal => {
                if (this.searchQuery) {
                    if (cereal.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return this.meetsFilters(cereal);
                    }
                } else {
                    return this.meetsFilters(cereal);
                }
            });
            return filtered;
        },
    },
    methods: {
        meetsFilters(cereal) {
            const meetsNutriScore = !this.selectedNutriScore || cereal.nutriScore === this.selectedNutriScore;
            const meetsSugarFilter = !this.sugarFilter || cereal.sucres < 1;
            const meetsSaltFilter = !this.saltFilter || cereal.matieresGrasses < 50;
            const meetsBoostFilter = !this.boostFilter || (cereal.vitamines >= 25 && cereal.fibres >= 10);

            return meetsNutriScore && (meetsSugarFilter || meetsSaltFilter || meetsBoostFilter);
        },
        calculateNutriScore(cereal) {
            const seuils = {
                sucres: [4.5, 9, 13.5, 18],
                matieresGrasses: [1, 2, 3, 4.5],
                fibres: [0.9, 1.9, 3.8, 9],
                sel: [0.315, 0.63, 0.945, 1.26],
            };

            // Calcule les valeurs par rapport aux seuils
            const calcValeur = (valeur, seuil) => {
                if (valeur < seuil[0]) return 0;
                if (valeur < seuil[1]) return 1;
                if (valeur < seuil[2]) return 2;
                if (valeur < seuil[3]) return 3;
                return 4;
            };

            // Calcule les scores pour chaque critère
            const scoreSucres = calcValeur(cereal.sucres, seuils.sucres);
            const scoreMatièresGrasses = calcValeur(cereal.matieresGrasses, seuils.matieresGrasses);
            const scoreFibres = calcValeur(cereal.fibres, seuils.fibres);
            const scoreSel = calcValeur(cereal.sel, seuils.sel);

            // Calcule le NutriScore global
            const nutriScore = Math.max(scoreSucres, scoreMatièresGrasses, scoreFibres, scoreSel);

            // Associe le NutriScore à la lettre correspondante (A, B, C, D, E)
            switch (nutriScore) {
                case 0:
                    return 'A';
                case 1:
                    return 'B';
                case 2:
                    return 'C';
                case 3:
                    return 'D';
                case 4:
                    return 'E';
                default:
                    return 'N/A'; // Gérer le cas où les données sont manquantes ou incorrectes
            }
        }
        ,
    },
});

app.mount('#app');
