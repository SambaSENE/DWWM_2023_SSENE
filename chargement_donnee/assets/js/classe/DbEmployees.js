class DbEmployees
{
    static async fetchALL(_url){
        let response = await fetch(_url);
        let json = await response.json();
        return json;
    }
}
export { DbEmployees };