<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/news">News</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
