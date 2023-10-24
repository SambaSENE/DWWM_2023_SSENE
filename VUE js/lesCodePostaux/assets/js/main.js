import { CodePostaux } from './CodePostaux.js';
import { DbJson } from './Db.js';
const { createApp } = Vue;
const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';
// const apiURL = './zipcode.json';

const app = createApp({
    data() {
        return {
            codePostaux: [], // Un tableau pour stocker les codes postaux et noms de villes.
            codeCommune: null, // La variable qui stocke le code postal entré par l'utilisateur.
            selectedCity: null, // L'objet qui stocke les données de la ville sélectionnée.
            searchedCity: false, // Un indicateur pour afficher un message si aucune ville n'est trouvée.
        };
    },
    async mounted() {
        const dataJson = await DbJson.fetchUrl(apiURL); // Récupération des données JSON depuis une URL.

        // Parcourir les données JSON et créer des objets CodePostaux pour chaque entrée.
        for (const item of dataJson) {
            const zipCode = new CodePostaux(item.codePostal, item.nomCommune); 
            this.codePostaux.push(zipCode); // Ajouter les objets à la liste des codes postaux.

            // console.log(zipCode);
        }
    },
    methods: {
        updateSuggestions() {
            this.selectedCity = null; // Réinitialise l'objet selectedCity.
            this.searchedCity = false; // Réinitialise l'indicateur searchedCity.
        },
        searchCity() {
            const selectedCode = this.codeCommune; // Récupère le code postal entré par l'utilisateur.
            if (selectedCode) {
                // Cherche la ville correspondant au code postal dans la liste des codes postaux.
                const city = this.codePostaux.find(city => city.codePostaux === selectedCode);

                if (city) {
                    this.selectedCity = city; // Affiche les données de la ville trouvée.
                } else {
                    this.searchedCity = true; // Active searchedCity pour afficher un message.
                }
            } else {
                this.selectedCity = null; // Réinitialise selectedCity si aucun code postal n'est saisi.
            }
        }
    }
});

app.mount('#app'); // Montre l'application Vue sur l'élément avec l'ID "app" dans le HTML.
