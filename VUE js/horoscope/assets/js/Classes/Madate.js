class Madate
{
    constructor(_date){
        this.currentDate = new Date();
        this.dateBirth = new Date(_date);
    }

    estDansLePasser(){
        if(this.dateBirth < this.currentDate){
            return this.dateBirth;
        }
        return false;
    }
    /**
     *  retourne le jour de naissance
     * @returns { Date} le jour de naissance
     */
    retournerJour(){
        return this.dateBirth.getDate();
    }
    /**
     * retoune le mois de naissance
     * @returns { Date} le mois de naissance
     */
    retournerMois(){
        return this.dateBirth.getMonth();
    }

}
export { Madate }