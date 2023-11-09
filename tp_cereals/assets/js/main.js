import { Cereal } from "./Cereal.js";
import { Db } from "./Db.js";
const apiUrl = './data/cereals.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            dataSouce: [],// données source
            cereals: [],// copie 
        }
    },
    async mounted() {
        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let cereal = new Cereal(data)
            this.dataSouce.push(cereal);
        }

        this.cereals = { ...this.dataSouce }

        this.dataSouce.sort();
    }, methods: {
        sortCol(event) {
            let attribut = event.target.dataset.attribut;
            if (attribut) {

                this.cereals.sort((a, b) => {
                    if (a[attribut] > b[attribut]) {
                        return 1;
                    }
                    else if (a[attribut] < b[attribut]) {
                        return -1;
                    }
                    return 0;
                }).reverse()
            } else {
                this.cereals.sort((a, b) => {
                    if (a[attribut] > b[attribut]) {
                        return 1;
                    }
                    else if (a[attribut] < b[attribut]) {
                        return -1;
                    }
                    return 0;
                })
            }
        },

        //     Algorithme deleteElement(event)
        //     // Récupérer l'ID de la céréale à supprimer depuis l'événement
        //     id <- event.target.dataset.cereal.id

        //     // Initialiser un nouveau tableau pour stocker les céréales filtrées
        //     nouveauTableau <- tableauVide

        //     // Parcourir chaque céréale dans le tableau existant
        //     Pour chaque céréale dans this.cereals
        //         // Vérifier si l'ID de la céréale correspond à l'ID à supprimer
        //         Si céréale.id n'est pas égal à id
        //             // Ajouter la céréale au nouveau tableau
        //             Ajouter céréale à nouveauTableau
        //         Fin Si
        //     Fin Pour

        //     // Remplacer le tableau existant par le nouveau tableau filtré
        //     this.cereals <- nouveauTableau
        // Fin Algorithme 

        deleteElement(event) {
            // const id = event.target.dataset.cereal.id;
            // this.cereals = this.cereals.filter((cereal) => cereal.id !== id);
        }

    }
}
createApp(myApp).mount('#app');


