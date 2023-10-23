import { Cereales } from "./mesClasses/Cereales.js"
import { DbJson } from "./mesClasses/dbJson.js"
const apiURL = 'https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json'
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            cards: [],
            searchQuery: '',
            selectedNutriScores: [],
            noSugar: false,
            lowSalt: false,
            boost: false,
        };
    },
    async mounted() {

        const json = await DbJson.fetchJson(apiURL);

        for (const item of Object.entries(json.data)) {
            const card = new Cereales(item);
            this.cards.push(card[1]);


        }
    }, computed: {
        // filteredCards() {
        //     return this.cards.filter(card => {
        //         const matchesNutriScore = this.selectedNutriScores.length === 0 || this.selectedNutriScores.includes(card.nutriScore);
        //         const isNoSugar = this.noSugar ? card.sugar < 1 : true;
        //         const isLowSalt = this.lowSalt ? card.salt < 50 : true;
        //         const isBoost = this.boost ? (card.vitamins >= 25 && card.fibers >= 10) : true;


        //         const matchesName = this.searchQuery.trim() === '' || card.name.toLowerCase().includes(this.searchQuery.toLowerCase());

        //         return matchesNutriScore && (isNoSugar || isLowSalt || isBoost) && matchesName;
        //     });
        // }
    }, methods: {
        calculateNutriScore(rating) {
            switch (true) {
                case rating > 80:
                    return 'A';
                case rating >= 70 && rating <= 80:
                    return 'B';
                case rating >= 55 && rating < 70:
                    return 'C';
                case rating >= 35 && rating < 55:
                    return 'D';
                default:
                    return 'E';
            }
        }
    }




});


app.mount('#app')