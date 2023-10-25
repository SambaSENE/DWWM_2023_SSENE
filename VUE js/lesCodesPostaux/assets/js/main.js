import { CodePostaux } from './CodePostaux.js';
import { DbJson } from './Db.js';
const { createApp } = Vue;
const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';
// const apiURL = './zipcodes.json';

const app = createApp({
    data() {
        return {
            codePostaux: [],
            codeCommune: '',
            nomCommune: '',
            libelleAcheminement: '',
            selectedCity: null,
            searchedCity: false, // Un indicateur pour afficher un message si aucune ville n'est trouvée.
        };
    },
    async mounted() {
        const dataJson = await DbJson.fetchUrl(apiURL);
        
        for (const item of dataJson) {

            const zipCode = new CodePostaux(item.codePostal, item.codeCommune , item.nomCommune , item.libelleAcheminement); //
            this.codePostaux.push(zipCode);
      
        }
    },
    methods: {
        updateSuggestions() {
            this.selectedCity = null;
            this.searchedCity = false;
        },
        searchCity() {
            const selectedCode = this.codeCommune;
            if (selectedCode) {

                const city = this.codePostaux.filter(city => city.codePostaux === selectedCode);

                if (city) {
                    this.selectedCity = city;
                } else {
                    this.searchedCity = true;
                }
            } else {
                this.selectedCity = null; // Réinitialise selectedCity si aucun code postal n'est saisi.
            }
        }
    }
});

app.mount('#app'); // Montre l'appli Vue sur l'élément avec l'ID "app" dans le HTML.
