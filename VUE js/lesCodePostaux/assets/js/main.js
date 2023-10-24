import { CodePostaux } from './CodePostaux.js';
import { DbJson } from './Db.js';
const { createApp } = Vue;
const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';


const app = createApp({
    data() {
        return {
            codePostal: [],
            codeCommune: '',
            nomCommune: ''
        }
    }, async mounted() {
        const dataJson = await DbJson.fetchUrl(apiURL);
        for (const item in Object.entries(dataJson)) {
            
                const element = new CodePostaux(item);
                this.codePostal.push(element[0])
                // console.log(element);
        }   
    }
});
app.mount('#app');