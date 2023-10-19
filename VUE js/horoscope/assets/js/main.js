import { Signe } from "./Classes/Signe.js";
import { Madate } from "./Classes/Madate.js";

import { createApp } from Vue;

createApp({
  data() {
    return {
      message: 'Composant monté avec succès !', 
      signe: [], 
      dateNaissance: null 
    };
  },
  mounted() {
    this.clickHandle(); 
  },
  methods: {
    calculerAge() {
       
    },
    calculerSigne() {
        
    },
    clickHandle() {
        console.log('Bonjour le monde');
    }
  }
}).mount("#app");
