class Cereal
{
    constructor(_cereal){
        Object.assign(this,_cereal);
        this.ns = this.nutriScores(_cereal.rating);
    }

    nutriScores(_cereal){
        const rating =  parseInt(_cereal);
        if(rating < 35 ){
            return 'E';
        }else if(rating >70 && rating > 80){
            return 'B';
        }else if(rating > 55 && rating < 70){
            return 'C';
        }else if(rating > 35 && rating < 55){
            return 'D';
        }else {
            return 'A';
        }
    }
}
export { Cereal}