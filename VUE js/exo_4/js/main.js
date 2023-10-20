import { Signe } from "./Signe.js"
const { createApp } = Vue;
const now = new Date();

const myApp = {
    data() {
        return {
            dateNaissance: null,
            signe: []

        }
    },
    computed: {
        getDate() {
            if (this.dateNaissance) {
                let dateNaiss = new Date(this.dateNaissance);
                return dateNaiss.toLocaleDateString('fr');
            }
            return "";
        },
        getHeure() {
            if (this.dateNaissance) {
                let heureNaiss = new Date(this.dateNaissance);
                return heureNaiss.toLocaleTimeString();
            }
            return "";
        },
        getResultat() {

            let diff = now.getFullYear() - (new Date(this.dateNaissance)).getFullYear();
            return diff;
        },
        

    }
    
}

createApp(myApp).mount("#app");
