<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <p class="card-text">{{post.body}}</p>
  </div>
</div>
  
</template>

<script>
export default {
  name: "User-app",
  props: {
    post: {
      type: Object,
    },
  },

  computed: {

  },
};
</script>

<style></style>