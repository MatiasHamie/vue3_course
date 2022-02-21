// -- Usando Options API --
const app = Vue.createApp({
  //   template: `
  //         <h1>Hola Mundo</h1>
  //         <p>Desde App.js</p>
  //         <p> {{ true ? 'v' : 'f' }} </p>
  //         <p> {{ aFunction() }} </p>
  //     `,
  // methods: {},
  // watch: {},
  // setup() {}
  // -----
  // Lo que se crea en data es reactivo
  // y se puede usar en el template q estemos controlando
  data() {
    return {
      message: "Hola desde data(){}",
      quote: "I'm Batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    // este metodo ya es llamable desde el html u otro lado
    changeQuote(event) {
      console.log("click", event);
      this.author = "otro autor";
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

// Esto es un selector de css, por ej, si es una clase uso .myApp
app.mount("#myApp");
