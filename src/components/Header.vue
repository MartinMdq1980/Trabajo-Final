<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="d-flex">
    <div class="btn-toolbar">
      <button @click="Home()" type="button" class="btn btn-secondary margin-left-primerButton" data-toggle="tooltip" data-bs-placement="bottom" title="Usuarios">
         <i class="bi bi-house-door"></i>
        Usuarios
      </button>
       <router-link :to="`/Posts/${id}`" class="btn btn-secondary margin-left-segButton" data-toggle="tooltip" data-bs-placement="bottom" title="Posts"> 
        <i class="bi bi-card-text"></i> 
        Posteos
       </router-link>
    </div>
    <div class="margin-title">
      <h5 >{{this.$store.state.titulo}}</h5>
    </div>
    <div class="d-flex margin-search" v-if="this.$store.state.titulo.substr(0,4) === 'Post'">
      <input v-model="id" class="form-control me-2" type="search" placeholder="id" aria-label="Search" data-toggle="tooltip" data-bs-placement="bottom">
        <button @click="Posts()" type="button" class="btn btn-secondary margin-left-segButton" data-toggle="tooltip" data-bs-placement="bottom" title="Posts">
         <i class="bi bi-card-text"></i>
      </button>
    </div>
    <div class="d-flex margin-search" v-if="this.$store.state.titulo === 'Usuarios'">
      <input v-model="busqueda" class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" data-toggle="tooltip" data-bs-placement="bottom" title="Busqueda por username">
      <button @click="Listar_Usuarios({username:busqueda})" type="button" class="btn btn-secondary">
         Buscar
      </button>
    </div>
   </div>
 </nav> 
</template>

<script>
import {mapActions} from "vuex"
export default {
    name:'Header-app',
    data(){
      return {
        busqueda: null,
        id: 1, // default
      }
    },
    computed: {
    },
    methods:{
      ...mapActions(['Listar_Usuarios','Listar_Posts_Por_Usuario','ActualizarTitulo']),
      Home() {
        this.Listar_Usuarios(); //me carga todos los usuarios de nuevo por si filtro por busqueda
        this.$router.push('/');
      },
     Posts() {
        this.ActualizarTitulo('Posts Usuario ID: ' + this.id);
        this.Listar_Posts_Por_Usuario(this.id)
        // this.$router.replace('Posts/' + this.id);
      }
    }
}
</script>

<style>
.margin-left-primerButton{
    margin-left: 120px !important;
}
.margin-left-segButton{
    margin-left: 10px !important;
}
.margin-title{
    margin-left: 200px !important;
}
.margin-search{
    margin-left: 300px !important;
}
</style>