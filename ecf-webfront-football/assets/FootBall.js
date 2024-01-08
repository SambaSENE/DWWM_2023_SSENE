class Football
{
    constructor(_match){
        Object.assign(this, _match);
        this.scoreAller = _match.score[0];
        this.scoreRetour = _match.score[1];
    }
    
    
    
}
export { Football }