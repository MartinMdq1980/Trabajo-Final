<template>
    <div class="container">
            <div class="mb-3 mt-3">
                <label for="name">(*) Nombre y Apellido:</label>
                <input v-model="params.name" type="text" class="form-control" id="name" placeholder="Nombre y Apellido" name="name">
            </div>
            <div class="mb-3 mt-3">
                <label for="username">Usuario:</label>
                <input v-model="params.username" type="text" class="form-control" id="username" placeholder="Usuario" name="username">
            </div>
            
            <div class="mb-3 mt-3">
                <label for="email">Email:</label>
                <input v-model="params.email" type="email" class="form-control" id="email" placeholder="email" name="email">
            </div>
            <button @click="AltaUsuario(params)" type="submit" class="btn btn-primary">Agregar</button>
    </div>
</template>

<script>
import {mapActions} from "vuex"
// import CardPost from "@/components/CardPost";
export default {
  name: "home-app",
  components: {   

  },
  data() {
    return {
      params: {
        address: {},
        company: {},
        email:'',
        name: '',  
        phone: null,
        username:'',
        website: null,
      }
    };
  },

  computed: {
   //...mapGetters(['posts'])
   
  },
  async created() {
    try {
      this.ActualizarTitulo('Alta de Usuario');
     // this.Listar_Posts_Por_Usuario(this.id); // le paso el id que llega en la prop cuando lo llaman a traves del router
    }
     catch (error) {
      console.log(error);
    } 
  },

  methods: {
   ...mapActions(['AddUser',  'ActualizarTitulo']),
   AltaUsuario(){
    // valido data
    if (this.params.name.length > 0)
       {
         try {
            this.AddUser(this.params);
            // redirijo a usuarios
            alert("Usuario Agregado con exito!");
            this.$router.push('/').catch(()=>{});
         } catch (error) {
           console.log(error);
         }
         
       }
       else
        {
            alert('Debe ingresar un nombre');
        }


   }
   
  }
};
</script>

<style></style>
