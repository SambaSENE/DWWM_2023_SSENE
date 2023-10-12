class MaDate{
    /**
     * Constructeur
     * @param {Date} _date La date de naissance
     */
    constructor(_date)
    {
        this.dateCurrent = new Date();
        this.dateBirth = _date;
    }
     /**
      * Retoune vrai si la date est inferieur aà la date actuelle
      * @returns {boolean} vrai si la date est dans le passé
      */
    estDansLePasse()
    {
        return this.dateCurrent > this.dateBirth;
    }
    /**
     * retourne nombre date entre la date du jour et la date de naissance
     * @returns {number} le nombre d'année entre la date saisie et dans la date de naissance
     */
    dateIntervale(){
        let dateDiff = this.dateCurrent -this.dateBirth;
        return parseInt(dateDiff /(1000*3600*24*365));
    }
}
export { MaDate}

