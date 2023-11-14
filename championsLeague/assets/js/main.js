import { FetchData } from "./FetchData.js";
import { Match } from "./Match.js";

const apiUrl = './data/dataSoccer.json';
const {createApp} = Vue;

const myApp = {
    data(){
        return {
            saisonSource: [],
            saison: [],
            groups: [],
            searchMatch: '',
            asc: true,
        }
    }, async mounted(){
        let data = await FetchData.fetchUrl(apiUrl)
        for (const item of data) {
            let  saison = new Match(item);
            this.saisonSource.push(saison);
            
        }
        this.saisonSource.sort();
       
        this.saison = [...this.saisonSource];
        
        
    }, methods: {

        sortColumn(event){
            let attribut = event.target.id;
            let functionSort = (a , b)=> {
                if(a[attribut] > b[attribut]){
                    return 1;
                }else if(a[attribut] < b[attribut]) {
                    return -1;
                }else {
                    return 0;
                }
            }
            this.saison = this.saisonSource.sort(functionSort)

            if(this.asc === false){
                this.saison.reverse();
            }

            this.asc = !this.asc;
        }

    }
}

createApp(myApp).mount('#app');