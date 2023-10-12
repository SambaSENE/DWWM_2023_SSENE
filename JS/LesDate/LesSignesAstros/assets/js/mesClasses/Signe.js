class Signe {
    constructor(_date) {
        this.dateBirth = new Date();
        this.zodiac = ["Capricorne", "Verseau", "Poisson", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    }
/**
 * retoune le jour du mois
 * @returns {Date} jour de de naissance
 */
    retournerJour() {
       let  jour = this.dateBirth.getDate();
        return jour;
    }
 /**
  * retourne le mois de l'année de naissance
  * @returns {Date} le mois de l'année de naissance
  */
    retournerMois() {
        let mois = this.dateBirth.getMonth();
        return mois;
    }
    
    /**
     * retourne une signe zodiac qui corresponde a la saisie
     * @returns {String} signe zodiac
     */
    getSigneZodiac() {
        this.dateBirth;
        switch (this.dateBirth) {
            case this.retournerJour() >= 20 && this.retournerMois() === 1 || this.retournerJour() <= 18 && this.retournerMois() == 2: // VERSEAU
                return this.zodiac[1];
                break;

            case this.retournerJour() >= 19 && this.retournerMois() === 2 || this.retournerJour() <= 21 && this.retournerMois() == 3: // POISSONS
                return this.zodiac[2];
                break;
            case this.retournerJour() >= 20 && this.retournerMois() === 3 || this.retournerJour() <= 19 && this.retournerMois() == 4: // BELIER
                return this.zodiac[3];
                break
            case this.retournerJour() >= 20 && this.retournerMois() === 4 || this.retournerJour() <= 20 && this.retournerMois() == 5: // TAUREAU
                return this.zodiac[4];
                break
            case this.retournerJour() >= 21 && this.retournerMois() === 5 || this.retournerJour() <= 20 && this.retournerMois() == 6: // GEMEAUX
                return this.zodiac[5];
                break
            case this.retournerJour() >= 21 && this.retournerMois() === 6 || this.retournerJour() <= 22 && this.retournerMois() == 7: // CANCER
                return this.zodiac[6];
                break
            case this.retournerJour() >= 23 && this.retournerMois() === 7 || this.retournerJour() <= 22 && this.retournerMois() == 8: // LION
                return this.zodiac[7];
                break
            case this.retournerJour() >= 23 && this.retournerMois() === 8 || this.retournerJour() <= 22 && this.retournerMois() == 9: // VIERGE
                return this.zodiac[8];
                break
            case this.retournerJour() >= 23 && this.retournerMois() === 9 || this.retournerJour() <= 22 && this.retournerMois() == 10: // BALANCE //Bloc sur ce cas
                console.log('je suis bloqué ici');
                return this.zodiac[9];
                break
            case this.retournerJour() >= 23 && this.retournerMois() === 10 || this.retournerJour() <= 21 && this.retournerMois() == 11: // SCORPION
                return this.zodiac[10];
                break
            case this.retournerJour() >= 22 && this.retournerMois() === 11 || this.retournerJour() <= 21 && this.retournerMois() == 12: // SAGITTAIRE
                return this.zodiac[11];
                break
            case this.retournerJour() >= 22 && this.retournerMois() === 12 || this.retournerJour() <= 19 && this.retournerMois() == 1: // CAPRICORNE
                return this.zodiac[0];
                break

            default: 'NOT A FOUND'
                break;
        }
      
        console.log(this.zodiac[1 , this.retournerMois()]);
        return this.zodiac[] ;

    }

}
export { Signe };