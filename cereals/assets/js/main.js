import { Cereales } from "./mesClasses/Cereales.js"
import { DbJson } from "./mesClasses/dbJson.js"
const apiURL = 'https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json'
const { createApp } = Vue

const app = createApp({
  data() {
    return {
        cards: []
    }
  },
  async mounted() {
    let json = await DbJson.fetchJson(apiURL);
    
    for (const item in json) {
        let card = new Cereales(item);
        this.cards.push(card)
    }

    console.log(this.cards);
  }
})

app.mount('#app')