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
       
        return this.dateBirth.getDate();
    }
 /**
  * retourne le mois de l'année de naissance
  * @returns {Date} le mois de l'année de naissance
  */
    retournerMois() {
        
        return this.dateBirth.getMonth() +1;
    }
    
    /**
 * Returns the corresponding zodiac sign based on the birthdate.
 * @returns {string} Zodiac sign
 */
getSigneZodiac() {
    const day = this.retournerJour();
    const month = this.retournerMois();

    // Use a switch statement for individual cases.
    switch (month) {
        case 1:
            if (day >= 20) return this.zodiac[1]; // VERSEAU
            return this.zodiac[0]; // CAPRICORNE
        case 2:
            if (day >= 19) return this.zodiac[2]; // POISSONS
            return this.zodiac[1]; // VERSEAU
        case 3:
            if (day >= 21) return this.zodiac[3]; // BÉLIER
            return this.zodiac[2]; // POISSONS
        case 4:
            if (day >= 20) return this.zodiac[4]; // TAUREAU
            return this.zodiac[3]; // BÉLIER
        case 5:
            if (day >= 21) return this.zodiac[5]; // GÉMEAUX
            return this.zodiac[4]; // TAUREAU
        case 6:
            if (day >= 21) return this.zodiac[6]; // CANCER
            return this.zodiac[5]; // GÉMEAUX
        case 7:
            if (day >= 23) return this.zodiac[7]; // LION
            return this.zodiac[6]; // CANCER
        case 8:
            if (day >= 23) return this.zodiac[8]; // VIERGE
            return this.zodiac[7]; // LION
        case 9:
            if (day >= 23) return this.zodiac[9]; // BALANCE
            return this.zodiac[8]; // VIERGE
        case 10:
            if (day >= 23) return this.zodiac[10]; // SCORPION
            return this.zodiac[9]; // BALANCE
        case 11:
            if (day >= 22) return this.zodiac[11]; // SAGITTAIRE
            return this.zodiac[10]; // SCORPION
        case 12:
            if (day >= 22) return this.zodiac[0]; // CAPRICORNE
            return this.zodiac[11]; // SAGITTAIRE
        default:
            return "NOT FOUND";
    }
}


}
export { Signe };