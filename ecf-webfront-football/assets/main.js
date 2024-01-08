/* Football APP */ 
import { FetchDb } from "./FetchDb.js";
import { Football } from "./FootBall.js";
const apiUrl = './tournoi/football.json';
const { createApp } = Vue;
const appFootball = {
    data() {
        return {
            matchFooballAller: [],
        }
    },
    async mounted() {
        const data = await FetchDb.fetchDb(apiUrl);
        for (const item of data) {
           const match = new Football(item);
           this.matchFooballAller.push(match);
        }

        log
        
    },
    computed: {

    },
    methods: {
        getWinner(){
            
        }
    }
}
createApp(appFootball).mount('#appFootball');