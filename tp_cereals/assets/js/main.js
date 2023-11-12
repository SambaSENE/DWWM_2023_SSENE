import { Cereal } from "./Cereal.js";
import { Db } from "./Db.js";
const apiUrl = './data/cereals.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            dataSouce: [],// données source
            cereals: [],// copie 
            caloriesColumn: [],
            asc: true,
            searchCereals: '',
            checked: [],
        }
    },
    async mounted() {
        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let cereal = new Cereal(data)
            this.dataSouce.push(cereal);
        }
        this.dataSouce.sort();

        this.cereals = [...this.dataSouce];
        // console.log(this.cereals);
        for (const item of this.cereals) {
            let elementInt = parseInt(item.calories);
            this.caloriesColumn.push(elementInt)
        }


    }, computed: {
        averageCalories() {
            let total = this.caloriesColumn.reduce((a, b) => a + b, 0);
            return (total / this.cereals.length).toFixed(2);
        }, 
        nbElement(){
            return this.cereals.length;
        }
    }

    , methods: {
        searchEvent(){
             this.cereals = this.cereals.filter(cereal => cereal.name.toLowerCase().includes((this.searchCereals.toLowerCase()).trim()));

        }, 
        sortCol(event) {
            console.log(event.target.id);
            // event.target.id = attribut "id" de l'élément cible de l'évènement
            let attribut = event.target.id;

            // fonction de tri
            let fonctiontri = (a, b) => {
                if (a[attribut] > b[attribut]) {
                    return 1;
                }
                else if (a[attribut] < b[attribut]) {
                    return -1;
                } else {
                    return 0;
                }
            }

            // tri des données
            this.cereals.sort(fonctiontri);

            // si la valeur de "asc" est "false", on inverse le tri
            if (this.asc === false) {
                this.cereals.reverse();
            }

            // inversion du sens du tri pour le prochain clic
            this.asc = !this.asc;
        },
        deleteElement(event) {
            const idCereal = event.target.dataset.id;
            this.cereals = this.cereals.filter(cereal => cereal.id != idCereal);
        }
    },
}
createApp(myApp).mount('#app');


