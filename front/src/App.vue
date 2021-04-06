<template>
  <div id="app-prin">
<nav class="navbar navbar-dark bg-dark ">
  <a class="navbar-brand">Plataforma de películas</a>
  
 
</nav>
    <PeliculasList />
  </div>
</template>

<script>
import PeliculasList from './components/PeliculasList.vue'
export default {
  name: 'app',
  components:{
   PeliculasList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
