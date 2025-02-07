<template>
  <v-card>
    <v-card-title>
      <h1>¡Bienvenido a la página de acerca de!</h1>
    </v-card-title>
    <div class="posts-grid">
      <v-card class="post-card" v-for="post in posts" :key="post.id">
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>{{ post.body }}</v-card-text>
      </v-card>
    </div>
  </v-card>
</template>
<script lang="ts" setup>
import PostServices from "@/services/api/PostServices";
import { onMounted } from "vue";
const service = new PostServices();
const posts = service.getPosts();
onMounted(async() => {
  await service.fetchAll();
});
</script>

<style>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.post-card {
  background-color: #ffffff;
}
.post-card:hover {
  background-color: #673147;
}
</style>
