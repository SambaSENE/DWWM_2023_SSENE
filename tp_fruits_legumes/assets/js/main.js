import { Db } from "./classes/Db.js";
import { Legumes } from "./classes/Legumes.js";
const apiUrl = '../data/legumos.json';

const {createApp} = Vue;

const myApp = {
    data(){
        return{
            legumesSources: [],
            legumes: [],
        }
    },
    async mounted(){
        const dataJson = await Db.fetchUrl(apiUrl)

        for (const legume of dataJson) {
            this.legumesSources.push(legume);
        }
        this.legumes = [...this.legumesSources];

        console.log(this.legumes);

    }
}
createApp(myApp).mount('#app');