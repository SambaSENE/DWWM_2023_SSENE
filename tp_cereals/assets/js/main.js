import { Cereal } from "./Cereal.js";
import { Db } from "./Db.js";
const apiUrl = './data/cereals.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            dataSouce: [],// données source
            cereals: [],// copie 
            nutriscore: [],
            arrayKey: [],
            dataCol: [],


        }
    },
    async mounted() {
        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let newCereal = new Cereal(data)
            this.cereals.push(newCereal);
            this.cereals.push(newCereal);
            this.nutriscore.push(Math.round(newCereal.rating));
        }
        for (const key in this.cereals[0]) {
            this.arrayKey.push(key)
        }
        console.log(this.arrayKey);
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
        deleteElement(event){
            let id= event.target.dataset.cereal.id ;
            this.cereals.filter((id) => this.cereals !== id);
        }
    }
}
createApp(myApp).mount('#app');


