<template>
  <h2>{{ customTitle }}</h2>
  <!-- 
      Ojo, cuando usamos los computed, pasar solo el puntero
      a la funcion
   -->
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValueComputed }}</p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  // de esta forma recibimos las props
  //   props: ["title", "start"],
  //   https://vuejs.org/guide/components/props.html#prop-validation
  props: {
    // property: [Number, String] //esto tmb es valido
    title: String,
    start: {
      type: Number,
      default: 100,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
    // en el ejemplo, usamos una funcion computada
    // pero esto q esta aca es valido
    // getSquareValue() {
    //   return this.counter * this.counter;
    // },
  },
  // estas propiedades computadas se guardan en el cache
  // es como un useMemo/useCallback de React
  // importante: no pueden devolver void
  computed: {
    getSquareValueComputed() {
      return this.counter * this.counter;
    },
    // esto es solo para mostrar como seria si no viene una prop
    // (en este caso es el titulo)
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3 ease-in-out;
}

button:hover {
  background: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
