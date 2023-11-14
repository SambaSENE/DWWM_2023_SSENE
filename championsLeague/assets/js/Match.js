class Match
{
    constructor(_saison){
        Object.assign(this,  _saison);
        this.commingSoon = this.setCommingSoon(_saison.HomeTeamScore , _saison.AwayTeamScore)
    }
    setCommingSoon(_team1 ,  _team2){
        if(_team1 == null && _team2 == null){
            return "-"
        }
    }
}

export { Match }