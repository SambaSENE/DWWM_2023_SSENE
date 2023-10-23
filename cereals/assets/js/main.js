import { Cereales } from "./mesClasses/Cereales.js"
import { DbJson } from "./mesClasses/dbJson.js"
const apiURL = 'https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json'
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      cards: [], // Assurez-vous que cards est initialisé en tant que tableau vide
    };
  },
  async mounted() {
    try {
      let json = await DbJson.fetchJson(apiURL);

      if (Array.isArray(json)) {
        for (const item of json) {
          let card = new Cereales(item);
          this.cards.push(card);
        }

        console.log(this.cards);
      } else {
        console.error("Le JSON n'est pas un tableau d'objets.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données JSON : ", error);
    }
  },
});


app.mount('#app')