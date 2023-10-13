class MaDate
{
    /**
     * constructeur
     */
    constructor()
    {
        this.currentDate = new Date();
    }

    /**
     * retoune la date courante locale
     * @returns {Date} la date courante locale
     */
    retouneDate()
    {
        return this.currentDate.toLocaleDateString('fr');
    }
}
export{MaDate};