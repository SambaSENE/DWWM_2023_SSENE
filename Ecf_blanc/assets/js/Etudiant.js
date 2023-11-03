class Etudiant {
    constructor(_etudiant) {
        Object.assign(this, _etudiant);
        this.prenom = this.getPrenom(_etudiant.fullname);
        this.nom = this.getNom(_etudiant.fullname);
        
    }

    getPrenom(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let prenom = fullNameArray[1];
        return prenom;
    }
    getNom(_fullName){
        let fullNameArray = _fullName.split(' ');
        let nom = fullNameArray[0];
        return nom;
    }
    sortGrade(_grade){
        let grade  = _grade.sort((a , b) => a - b);
        return grade;
    }
  
}
export { Etudiant }