import { Cereal } from "./Cereal.js";
import { Db } from "./Db.js";
const apiUrl = './data/cereals.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            dataSouce: [],// données source
            cereals: [],// copie 
            asc: true,
            search: '',

        }
    },
    async mounted() {
        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let cereal = new Cereal(data)
            this.dataSouce.push(cereal);
        }

        this.cereals = [...this.dataSouce]

        this.dataSouce.sort();
    }, methods: {
        sortCol(event) {
            let attribut = event.target.attribut;
            if (attribut) {

                this.cereals.sort((a, b) => {
                    if (a[attribut] > b[attribut]) {
                        return 1;
                    }
                    else if (a[attribut] < b[attribut]) {
                        return -1;
                    }else {
                        return 0;
                    }
                })
                
            } 
        },
        deleteElement(event) {
            const idCereal = event.target.dataset.id;
            this.cereals = this.cereals.filter(cereal => cereal.id != idCereal);
        },
        searchCereals() {
            // this.cereals = this.cereals.find(cereal => )
        }
    }, computed: {
        averageCalories() {
            const total = this.cereals.reduce((currentValue, acumulator) => currentValue + acumulator, 0)
        }
    }
}
createApp(myApp).mount('#app');


