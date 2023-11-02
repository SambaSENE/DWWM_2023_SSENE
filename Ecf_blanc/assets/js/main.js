import { Db } from "./Db.js";
import { Etudiant } from "./Etudiant.js";
const fileJson = './eval.json';

const { createApp } = Vue;

const appEtudiant = {
    data() {
        return {
            etudiants: [],
            allGrade: [],
            notes: [],
            moyenneGrade: [],
        }
    },
    async mounted() {
        let data = await Db.fetchFileJson(fileJson);


        for (const item of data) {
            const etudiant = new Etudiant(item);
            this.etudiants.push(etudiant);
        }

        for (const item of this.etudiants) {
            this.allGrade.push(item.grade);
        }

        for (const item of this.etudiants) {
            
            if(item.grade > this.getMoyenne){

                this.moyenneGrade.push(item)
            }
            
        }
        console.log(this.moyenneGrade);
    }, computed: {

        getNbEtudiants() {
            return this.etudiants.length;
        },
        getMoyenne() {
            let total = this.allGrade.reduce((a, b) => a + b, 0);
            return (total / this.getNbEtudiants).toFixed(2);
        },
        testSaid() {
            for (const item of this.etudiants) {
                this.notes.push(item.grade)
            }
            return this.notes

        }, 
        getEtuMoyenne(){
            return this.moyenneGrade.length;
        }
    }
}
createApp(appEtudiant).mount("#app")


