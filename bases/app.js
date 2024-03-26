const app = Vue.createApp({
  data(){
    return{
        quote: 'Soy batmanido',
        author:'esteban russoskenovich'
    }
  },
  methods: {
      changeQuote(){
        console.log('Hola mundete');
        this.author = 'BRUCE WILLIS';
        this.capitalize();
      },
      capitalize(){
        this.quote = this.quote.toUpperCase();
      }
  }
});


app.mount('#myApp');