<template>
    <div class="container">
      <div class="row">
        <div class="col  mt-4 col-md-4" v-for="(user, index) in usuarios" :key="index">
          <CardUser :user="user" />
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import CardUser from "@/components/CardUser";
export default {
  name: "home-app",
  components: {  CardUser },
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters(['usuarios'])
   
  },
  async created() {
    try {
      this.ActualizarTitulo('Usuarios');
      this.Listar_Usuarios();
    }
     catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(['Listar_Usuarios', 'ActualizarTitulo']),

  }
};
</script>

<style></style>
