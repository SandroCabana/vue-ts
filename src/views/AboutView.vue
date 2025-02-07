<template>
  <div class="about">
    <h1>Listado de posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import PostServices from "@/services/api/PostServices";
import {  onMounted } from "vue";
const service = new PostServices();
const posts = service.getPosts();
onMounted(async() => {
  await service.fetchAll();
});
</script>

<style>
</style>
