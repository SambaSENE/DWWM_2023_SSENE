import { DbEmployees } from "./classe/DbEmployees.js";
import { Employees } from "./classe/Employees.js";

const { createApp } = Vue;

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/05-employees/employees.json';

const myApp = {
    data() {
        return {
            employees: [],
            totauxSalary: null,
        }
    },
    async mounted() {
        let dataJson = await DbEmployees.fetchALL(apiURL);

        for (const data of dataJson.data) {
            const employe = new Employees(data);
            this.employees.push(employe);
        }

       
        
    },
    computed: {
        totalSalary() {
            
            return this.employees.reduce((total, employee) => total + employee.salary, );
        }
    }
}

createApp(myApp).mount('#app');
