import { DbEmployees } from "./classe/DbEmployees.js";
import { Employees } from "./classe/Employees.js";
// const tbody = document.getElementById('tbody');

const { createApp } = Vue;

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/05-employees/employees.json';




const myApp = {
    data() {
        return {
            employees: [],
            emailEmployees: [],
        }
    },
    async mounted() {
        let dataJson = await DbEmployees.fetchALL(apiURL);
        
        for (const data of dataJson.data) {
            const  employe = new Employees(data);
            this.employees.push(employe);
            
        }
        

        for (const item of this.employees) {
            let email = item.calculerEmail(item.employee_name);
            this.emailEmployees.push(email);
            //this.employees.push(email);
        }
        console.log(this.emailEmployees);

        
    }, computed: {

    }
}
createApp(myApp).mount('#app');


//     }
// }