import { Cereales } from "./mesClasses/Cereales.js"
import { DbJson } from "./mesClasses/dbJson.js"
const apiURL = 'https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json'
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            cards: [],
            checked: null,
        };
    },
    async mounted() {

        const json = await DbJson.fetchJson(apiURL);

        for (const item of Object.entries(json.data)) {
            const card = new Cereales(item);
            this.cards.push(card[1]);


        }
    },
    computed : {
        calculerNutriScore(){
        
        }  
    }, 
    methods: {
       nutriScore(){

       } 
    }




});


app.mount('#app')