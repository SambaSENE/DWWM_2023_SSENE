const app = Vue.createApp({
    data() {
        return {
           prenom: '',
           age: '',
           ageRetraite: 64
          
        }
    }, computed:{
        nbAnnee(){
            return   (this.ageRetraite - this.age)
        }
    }
    


}).mount("#app");