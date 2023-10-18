const { createApp } = Vue;
const now = new Date();

const myApp = {
    data() {
        return {
            dateNaissance: null,
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
        }
    },
    methods: {
        calculerNbAnnee() {
            if (this.dateNaissance) {
                let diff = now.getFullYear() - (new Date(this.dateNaissance)).getFullYear();
                return diff;
            }
            return 0;
        }
    }
}

createApp(myApp).mount("#app");
