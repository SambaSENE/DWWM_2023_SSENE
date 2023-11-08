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
        }
    },
    async mounted() {
        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let newCereal = new Cereal(data)
            this.cereals.push(newCereal);
            this.cereals.push(newCereal);
            this.nutriscore.push(Math.round(newCereal.rating))
        }

        this.dataSouce.sort();
    }, methods: {
        nutriScore(){
            
        }
    }
}
createApp(myApp).mount('#app');