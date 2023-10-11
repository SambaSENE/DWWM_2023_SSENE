class Signe
{
    constructor(_date)
    {
        this.datBirth = new Date(_date);
        this.zodiac = ["Capricorne", "Verseau", "Poisson", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    }
    /**
     * 
     * @param {Date} _date 
     * @returns 
     */
    retournerSigne(_date){
        
        return this.zodiac[_date];
    }
}
export{Signe};