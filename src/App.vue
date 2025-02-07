<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
</script>

<template>
 <MainLayout>
  </MainLayout>
</template>

<style scoped>
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
