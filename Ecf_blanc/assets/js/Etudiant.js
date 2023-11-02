class Etudiant {
    constructor(_etudiant) {
        Object.assign(this, _etudiant);
        this.prenom = this.getPrenom(_etudiant.fullname);
        this.nom = this.getNom(_etudiant.fullname);
        
    }

    getPrenom(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let prenom = fullNameArray[1].toLowerCase();
        return prenom;
    }
    getNom(_fullName){
        let fullNameArray = _fullName.split(' ');
        let nom = fullNameArray[0].toLowerCase();
        return nom;
    }

  
}
export { Etudiant }