class FetchDb
{
    static async fetchDb(_url){
        let response = await fetch(_url);
        let json = response.json();
        return json;
    }
}
export { FetchDb };