class Db
{
    static async fetchFileJson(_file) {
        let response = await fetch(_file);
        let json = await response.json();
        return json;
    }
}

export { Db} ; 