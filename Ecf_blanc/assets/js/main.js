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
            newEtudiant: {},
            newEtudiantNomPrenom: '',
            newEtudiantGrade: ''

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
        
        this.sortGrade()


        console.log(this.newEtudiantNomPrenom);
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
            const nomPrenomNewEtudiant = this.newEtudiantNomPrenom.split(' ');
            const nom = nomPrenomNewEtudiant[0];
            const prenom = nomPrenomNewEtudiant[1];
            const grade = parseFloat(this.newEtudiantGrade);

            if (nom.length > 2 && prenom.length > 2 && !isNaN(grade) && grade >= 0 && grade <= 20) {
                this.newEtudiant = { nom, prenom, grade };
                this.etudiants.push(this.newEtudiant);

                console.log(this.etudiants);
            } else {
                console.log('Erreur');
            }
        }


    }
}
createApp(appEtudiant).mount("#app")


