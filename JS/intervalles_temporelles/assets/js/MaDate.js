class MaDate{
    /*
     * le constructeur
     * @param {Date} _date la date saisie  
     */
    constructor(_date)
    {
        this.currentDate  = new Date();
        this.passe = _date;
    }
    /**
     * retoune vrai si la date est dans le passe
     * @returns {Boolean} Vrai si date est passe
     */
    estDansLePasse()
    {
        return  this.passe < this.currentDate ;
    }

    /**
     * retoune la date d'aujourd'hui 
     * @returns {Date} la date d'aujourd'hui
     */
    returnDate()
    {
        return this.currentDate.toLocaleDateString('fr');
    }

    /**
     * retourne l'heure actuelle 
     * @returns {Date} l'heure actuelle
     */
    returnHour()
    {
        return this.currentDate.toLocaleTimeString();
    }

    /**
     * 
     * @returns {Date}
     */
    returnInter()
    {
        return this.currentDate - this.passe
    }
}

export { MaDate }
