<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{user.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">"{{user.username}}"</h6>
    <p class="card-text">{{user.email}}</p>
    <router-link :to="`/Posts/${user.id}`" class="btn btn-primary"
        >Ver Posts</router-link
      >
  </div>
</div>
  
</template>

<script>
export default {
  name: "User-app",
  props: {
    user: {
      type: Object,
    },
  },

  computed: {

  },
};
</script>

<style></style>
