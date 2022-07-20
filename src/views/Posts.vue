<template>
    <div class="container">
      <div class="row">
        <div class="col mt-4 col-md-4" v-for="(post, index) in posts" :key="index">
          <CardPost :post="post" />
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import CardPost from "@/components/CardPost";
export default {
  name: "home-app",
  props: ["id"],
  components: {  CardPost },
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters(['posts'])
   
  },
  async created() {
    try {
      this.ActualizarTitulo('Posts Usuario ID: ' + this.id);
      this.Listar_Posts_Por_Usuario(this.id); // le paso el id que llega en la prop cuando lo llaman a traves del router
    }
     catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(['Listar_Posts_Por_Usuario',  'ActualizarTitulo']),

  }
};
</script>

<style></style>
