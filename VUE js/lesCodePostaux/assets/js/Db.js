class DbJson {
    static async fetchUrl(_url) {
        let response = await fetch(_url);
        let json = await response.json();
        return json;
    }
}

export { DbJson };