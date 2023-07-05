new Vue({
    el: '#app',
    data: {
        from: 'GBP',
        to: 'USD',
        amount: null,
        currencies: {},
        result: 0,
        loading: false
    },
    methods: {
        convertCurrency() {
            // const amount = Number(this.amount)
            // this.loading = true
            this.result = null;

            // axios.get(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${this.from}&to=${this.to}&amount=${this.amount}`, {
            //     headers: {
            //         'X-RapidAPI-Key': '69936f8ac1mshe283958e7128754p1f0a3bjsnc8e1194f3435',
            //         'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
            //     }
            // })
            // .then(response => {
            //     console.log(response)
            // })
            // this.loading = false
            this.result = 10
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
        calculateResult(){
            return Number(this.amount) * this.result
        },
        disabled(){
            return this.amount === 0 || !this.amount || this.loading
        }
    },
    watch: {
        from(){
            this.result = 0
        },
        to(){
            this.result = 0
        },
        amount(){
            this.result = 0
        }
    },
    mounted() {

        this.getCurrencies()
       
    }
})