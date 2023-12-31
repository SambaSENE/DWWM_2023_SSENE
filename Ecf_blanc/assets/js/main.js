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
            noteEliminatoire: 12,
            newEtudiantNomPrenom: '',
            newEtudiant: {},
            newEtudiantGrade: 0,

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

            if (item.grade > this.getMoyenne) {

                this.moyenneGrade.push(item)
            }
        }
        const newNomPrenom = this.newEtudiantNomPrenom.split(' ')

        console.log(newNomPrenom[0] , newNomPrenom[1]);
        this.sortGrade()

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
        getEtuMoyenne() {
            return this.moyenneGrade.length;
        }
    }, methods: {
        sortGrade() {

            return this.etudiants.sort((a, b) => b.grade - a.grade);
        },
        addNewEtudiant() {

            
            
           

            
        }


    }
}
createApp(appEtudiant).mount("#app")


