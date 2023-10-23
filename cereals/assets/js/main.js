import { Cereales } from "./mesClasses/Cereales.js"
import { DbJson } from "./mesClasses/dbJson.js"
const apiURL = 'https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json'
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            cards: [],

        };
    },
    async mounted() {

        const json = await DbJson.fetchJson(apiURL);

        for (const item of Object.entries(json.data)) {
            const card = new Cereales(item);
            this.cards.push(card[1]);


        }
    }, computed: {
        filter() {
            for (const item of this.cards) {
                if (item.rating >= 80 && item.rating < 100) {
                    return 'A'
                }
            }
            return rating
        }

    }




});


app.mount('#app')