class MaDate
{
    /**
     * 
     * @param {Date} _date  date
     */
    constructor(_date)
    {
        this.currentDate  =  new Date();
        this.datePasse = _date;
    }

  
    retouneDateCourante()
    {
        
        return this.currentDate ;
    }
}
export { MaDate };