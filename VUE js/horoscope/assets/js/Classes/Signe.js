class Signe {
    constructor(_date) {
        this._date = new Date(_date);
        this.zodiac = ["Capricorne", "Verseau", "Poisson", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    }
    /**
     * retoune le jour du mois
     * @returns {Date} jour de de naissance
     */
    retournerJour() {
        return this._date.getDate();
    }
    /**
     * retourne le mois de l'année de naissance
     * @returns {Date} le mois de l'année de naissance
     */
    retournerMois() {
        return this._date.getMonth() + 1;
    }

    /**
     * retourne une signe zodiac qui corresponde a la saisie
     * @returns {String} signe zodiac
     */
    getSigneZodiac() {

        let jour = this.retournerJour();
        let mois = this.retournerMois();
        switch (this._date) {
            case jour >= 20 && mois === 1 || jour <= 18 && mois === 2: // VERSEAU
                return this.zodiac[1];
                break;

            case jour >= 19 && mois === 2 || jour <= 21 && mois === 3: // POISSONS
                return this.zodiac[2];
                break;
            case jour >= 20 && mois === 3 || jour <= 19 && mois === 4: // BELIER
                return this.zodiac[3];
                break
            case jour >= 20 && mois === 4 || jour <= 20 && mois === 5: // TAUREAU
                return this.zodiac[4];
                break
            case jour >= 21 && mois === 5 || jour <= 20 && mois === 6: // GEMEAUX
                return this.zodiac[5];
                break
            case jour >= 21 && mois === 6 || jour <= 22 && mois === 7: // CANCER
                return this.zodiac[6];
                break
            case jour >= 23 && mois === 7 || jour <= 22 && mois === 8: // LION
                return this.zodiac[7];
                break
            case jour >= 23 && mois === 8 || jour <= 22 && mois === 9: // VIERGE
                return this.zodiac[8];
                break
            case jour >= 23 && mois === 9 || jour <= 22 && mois === 10: // BALANCE //Bloc sur ce cas
                console.log('ici');
                return this.zodiac[9];
                break
            case jour >= 23 && mois === 10 || jour <= 21 && mois === 11: // SCORPION
                return this.zodiac[10];
                break
            case jour >= 22 && mois === 11 || jour <= 21 && mois === 12: // SAGITTAIRE
                return this.zodiac[11];
                break
            case jour >= 22 && mois === 12 || jour <= 19 && mois === 1: // CAPRICORNE
                return this.zodiac[0];
                break

            default: 'NOT A FOUND'
                break;
        }
        return this.zodiac[jour, mois];

    }

}
export { Signe };