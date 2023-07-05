new Vue({
    el: '#app',
    data: {
        from: 'NGN',
        to: 'USD',
        amount: null,
        currencies: {},
        result: null
    },
    methods: {
        convertCurrency() {
            const amount = Number(this.amount)

            axios.get(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${this.from}&to=${this.to}&amount=${this.amount}`, {
                headers: {
                    'X-RapidAPI-Key': '69936f8ac1mshe283958e7128754p1f0a3bjsnc8e1194f3435',
                    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log(response)
            })
        },
        getCurrencies(){
            const currencies = localStorage.getItem('currencies')

            if(currencies){
                this.currencies = currencies
            }
    
            axios.get(`https://api.currencyapi.com/v3/currencies?apikey=PxYS19mA1c6EvziqBjM9W0FZbmbBF7IGRloeUSKv`)
                .then(response => {
                    
                    this.currencies = Object.values(response.data.data)

                    localStorage.setItem('currencies', JSON.stringify(response.data.data))
                    
                })
        }
    },
    computed: {

    },
    mounted() {

        this.getCurrencies()
       
    }
})