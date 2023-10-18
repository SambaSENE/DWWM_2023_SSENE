const { createApp } = Vue;



    createApp({
        data(){ 
            return{

                date: new Date(), 
                dateAnniv: ''
           
                
            }
           
        }, computed: {
            getDateAnniv(){
                
                return this.dateAnniv.toLocaleDateString('fr')
            }
        }
        
    }).mount('#app');