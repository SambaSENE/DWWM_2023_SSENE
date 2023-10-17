const { createApp } = Vue;

const pump = {
    data() {
        return {
            prix: 1.5,
            quantite: 0,
            distubution: false,
            quantiteDistribuee: 0,
            interval: null


        }
    }, computed: {

        quantiteEnlitre() {
            return this.quantite.toFixed(2);
        },
        netAPayePayer() {
            return (this.prix * this.quantite).toFixed(2);
        }
    },
    mounted() {

    },
    methods: {

    }
}
Vue.createApp(App).mount('#app')