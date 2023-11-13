import { Cereal } from "./Cereal.js";
import { Db } from "./Db.js";
const apiUrl = './data/cereals.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            dataSource: [],// données source
            cereals: [],// copie 
            caloriesColumn: [],
            checked: [],
            categories: '',
            searchCereals: '',
            asc: true,
        }
    },
    async mounted() {

        const dataJson = await Db.fetchUrl(apiUrl);
        for (const data of dataJson.data) {
            let cereal = new Cereal(data)
            this.dataSource.push(cereal);
        }
        this.dataSource.sort();

        this.cereals = [...this.dataSource];
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
        nbElement() {
            return this.cereals.length;
        }
    }

    , methods: {
        /**
         * function recherche muli-criteres
         *      Si this.categories == 'sugar' alors
         *         this.cereals = filtre this.dataSource sugar < 1 ;
         *       Sinon si this.catergorie == poorSalt alors 
         *          this.cereals = filtre this.dataSource salt < 50
         *      sinon si this.categories == boost 
         *          this.cereals = this.filtre dataSource vitamin >= 25 + fibre >= 10
         *      sinon 
         *          this.cereals     
         * fin Si
         * fin function
         */
        selectMultiCriter(){
            if(this.nutriScore){
                if(this.categories == 'noSugar'){
                   this.cereals = this.dataSource.filter(cereal => cereal.sugars < 1);
                }else if(this.categories == 'poorSault'){
                    this.cereals = this.dataSource.filter(cereal => cereal.sodium < 50);
                }else if(this.categories == 'boost'){
                    this.cereals = this.dataSource.filter(cereal => cereal.vitamins >= 25  && cereal.fiber >= 10);
                }
                else{
                    this.cereals;
                }
            }
        },
        nutriScore(){
            if (this.checked.length > 0) {
                this.cereals = this.dataSource.filter(cereal => this.checked.includes(cereal.ns));
                
            }else{
                this.cereals;
            }
          
        },
        searchEvent() {
            this.cereals = this.cereals.filter(cereal => cereal.name.toLowerCase().includes((this.searchCereals.toLowerCase()).trim()));

        },
        sortCol(event) {
            
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


