import Vue from 'vue'
import Vuex from 'vuex'
import http  from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    posts: [],
    titulo: String,
  },
  getters: {
    usuarios(state){
      return state.usuarios
    },
    posts(state){
      return state.posts
    },
  },
  mutations: {
    setUsuarios(state,value){
      state.usuarios = value
    },
    setPosts(state,value){
      state.posts = value
    },
    setTitulo(state,value){
      state.titulo = value
    },
  },
  actions: {
     async Listar_Usuarios({commit},parametros={}){
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users",
          {params: parametros}
        );
        commit('setUsuarios',response.data)  
      } catch (error) {
        console.log(error) 
      }
    },
    ActualizarTitulo({commit},titulo)
    {
      commit('setTitulo',titulo)
    },
    async Listar_Posts_Por_Usuario({commit},id={}){
      try {
        const response = await http.get(
          `https://jsonplaceholder.typicode.com/users/${id}/posts`
        );
        commit('setPosts',response.data)  
      } catch (error) {
        console.log(error) 
      }
    }
  }
})
