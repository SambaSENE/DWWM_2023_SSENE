import { DbEmployees } from "./classe/DbEmployees.js";
import { Employees } from "./classe/Employees.js";
// const tbody = document.getElementById('tbody');

const { createApp } = Vue;

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/05-employees/employees.json';




const myApp = {
    data() {
        return {
            employees: [],
        
        }
    },
    async mounted() {
        let dataJson = await DbEmployees.fetchALL(apiURL);
        
        for (const data of dataJson.data) {
            const  employe = new Employees(data);
            this.employees.push(employe);
            
        }
    
console.log(this.employees);
       
        
    }, computed: {

    }
}
createApp(myApp).mount('#app');


//     }
// }