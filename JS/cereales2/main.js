const app = Vue.createApp({
    data() {
        return {
            cards: [],
            search: '',
            selectedNutriScores: [],
            selectedCategory: '',
        };
    },
    computed: {
        filteredCards() {
            return this.cards.filter(item => {
                const nutriScoreMatch = this.selectedNutriScores.length === 0 || this.selectedNutriScores.includes(item.NS);
                const categoryMatch =
                    !this.selectedCategory ||
                    (this.selectedCategory === 'sansSucre' && item.sugar < 1) ||
                    (this.selectedCategory === 'pauvreEnSel' && item.sodium < 50) ||
                    (this.selectedCategory === 'Boost' && item.vitamins >= 25 && item.fiber >= 10);
                const searchMatch = item.name.toLowerCase().includes(this.search.toLowerCase());
                return nutriScoreMatch && categoryMatch && searchMatch;
            });
        },
    },
    methods: {
        calculerNutriScore(item) {
            const rating = item.rating;
            if (rating > 80) return 'A';
            else if (rating >= 70) return 'B';
            else if (rating >= 55) return 'C';
            else if (rating >= 35) return 'D';
            else return 'E';
        },
        removeCereal(id) {
            this.cards = this.cards.filter(item => item.id !== id);
        },
        calculerMoyenneCalories() {
            if (this.filteredCards.length === 0) return 0;
            const totalCalories = this.filteredCards.reduce((total, item) => total + item.calories, 0);
            return (totalCalories / this.filteredCards.length).toFixed(2);
        },
    },
    async created() {
        const response = await fetch('https://arfp.github.io/tp/web/vuejs/10-cereals/cereals.json');
        const data = await response.json();
        this.cards = data;
    },
});

app.mount('#app');
