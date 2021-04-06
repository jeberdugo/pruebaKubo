<template>
  <div id="app">
    <div class="container" id="pelis">
      <div class="row">
        <div class="col-3">
          <button
            type="button"
            class="btn btn-primary"
            style="align-text:left"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Agregar pelicula
          </button>
        </div>

        <div class="col-7">
          
          <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="onSubmit" v-on:submit="filterPeliculas(filtro)">
      <input class="form-control mr-sm-2" v-model="filtro" type="search" placeholder="Search" aria-label="Search">
      
      
    </form>
        </div>
        <div class="col-2">
          <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="filterPeliculas(filtro)" type="submit">Search</button>
        </div>
      </div>
    <div class="row">
      <h1>Estrenos</h1>
      <hr />
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div class="container-fluid" >
      <div class="row">
        <div
          class="peliculas   col-lg-4 col-md-6 col-sm-12"
          v-for="pelicula in estrenos"
          v-bind:key="pelicula.id"
        >
          <div class="card card-tall" style="width: 18rem">
            <img
              :src="`./src/assets/caratulas/${pelicula.id}.png`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.titulo }}</h5>
              <p class="card-text">
                {{ pelicula.descripcion }}
                <br />Duración: {{ pelicula.duracion }} <br />Categorias:
                {{ pelicula.categorias }} <br />Fecha de estreno:
                {{ pelicula.fecha2 }}
              </p>
               <iframe width="80%" height="50%" :src="`https://www.youtube.com/embed/${pelicula.trailer}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h1>Peliculas</h1>
      <hr />
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div class="container-fluid" >
      <div class="row">
        <div
          class="peliculas   col-lg-4 col-md-6 col-sm-12"
          v-for="pelicula in peliculas"
          v-bind:key="pelicula.id"
        >
          <div class="card card-tall" style="width: 18rem">
            <img
              :src="`./src/assets/caratulas/${pelicula.id}.png`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.titulo }}</h5>
              <p class="card-text">
                {{ pelicula.descripcion }}
                <br />Duración: {{ pelicula.duracion }} <br />Categorias:
                {{ pelicula.categorias }} <br />Fecha de estreno:
                {{ pelicula.fecha2 }}
              </p>
                

              <iframe width="80%" height="50%" :src="`https://www.youtube.com/embed/${pelicula.trailer}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

   

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Agregar pelicula
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="data.titulo"
                class="form-control"
                placeholder="Titulo"
                aria-label="titulo"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="text"
                v-model="data.descripcion"
                class="form-control"
                placeholder="Descripción de la pelicula"
                aria-label="descripcion"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="number"
                v-model="data.duracion"
                class="form-control"
                placeholder="Duración"
                aria-label="duracion"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="text"
                v-model="data.descripcion"
                class="form-control"
                placeholder="Descripción de la pelicula"
                aria-label="descripcion"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="date"
                v-model="data.estreno"
                class="form-control"
                placeholder="Fecha de estreno"
                aria-label="estreno"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="data.categorias"
                class="form-control"
                placeholder="Categorias"
                aria-label="categorias"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="data.trailer"
                class="form-control"
                placeholder="Link del trailer"
                aria-label="descripcion"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                accept="image/png"
                placeholder="Link del trailer"
                aria-label="descripcion"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              v-on:click="createPelicula"
              class="btn btn-primary"
            >
              Guardar
            </button>
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
      estrenos: [],
      error: "",
      filtro:"",
      data: {
        titulo: "",
        descripcion: "",
        duracion: "",
        estreno: "",
        categorias: "",
        trailer: ""
      }
    };
  },
  async created() {
    try {
      this.peliculas = await PeliculasService.getPeliculas();
      this.estrenos = await PeliculasService.getEstrenos();
      
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPelicula() {
      console.log(this.data);
      await PeliculasService.crearPelicula(this.data);
      this.peliculas = await PeliculasService.getPeliculas();
      data.titulo = "";
      data.descripcion = "";
      data.estreno = "";
      data.categorias = "";
      data.trailer = "";
    },
    filterPeliculas: function(){
      console.log(this.filtro);
      if(this.filtro == ""|| this.filtro==undefined){
         this.peliculas =  PeliculasService.getPeliculas();
        }
        else{
      this.peliculas = this.peliculas.filter(
        pelicula =>{
          return pelicula.titulo.toLowerCase().includes(this.filtro) || pelicula.categorias.toLowerCase().includes(this.filtro)
          }
      )}
      }
    
  }
};
</script>

<style>
.card-tall img {
  display: inline-block;
  width: 100%;
  height: auto;
  visibility: hidden;
  
}

.card{
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
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
#pelis {
  align-content: center;
  align-items: center;
  text-align: center;
}
</style>
