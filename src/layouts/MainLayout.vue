<template>
    <div class="navbar">
        <div>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </div>  
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<style scoped>  
    .navbar {
        display: block;
        align-items: center;
        justify-content: space-between;

        background-color: #ffffff;
        overflow: hidden;
    }
    .navbar a {
        float: left;
        display: block;
        align-items: center;

        columns: #000000;
        text-align: center;
        padding: 14px 16px ;
        text-decoration: none;
    }
    .navbar a:hover {

        color: #5e2129;
    }
</style>