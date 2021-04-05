<template>
  <div id="app">
    <div class="container">
      <h1>Peliculas</h1>
      <hr />
      <p class="error" v-if="error">{{ error }}</p>

      <div class="peliculas-cont">
        <div
          class="peliculas"
          v-for="(pelicula, index) in peliculas"
          v-bind:item="pelicula"
          v-bind:index="index"
          v-bind:key="pelicula.id"
        >
          
          <div class="card" style="width: 18rem">
            <img :src="`./src/assets/caratulas/${pelicula.id}.png`" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.titulo }}</h5>
              <p class="card-text">
                {{ pelicula.descripcion }}
                <br>Duración: {{ pelicula.duracion }}
                <br>Categorias: {{ pelicula.categorias}}
                <br>Fecha de estreno: {{ pelicula.fecha2}}

              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeliculasService from "../PeliculasService";
export default {
  name: "PeliculasList",
  data() {
    return {
      peliculas: [],
      error: "",
      data: "",
    };
  },
  async created() {
    try {
      this.peliculas = await PeliculasService.getPeliculas();
      console.log(this.peliculas);
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
