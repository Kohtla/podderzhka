<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/news">News</RouterLink>
      <RouterLink to="/games">Games</RouterLink>      
      <RouterLink to="/investors">For Investors</RouterLink>
      <RouterLink to="/press">Press Kit</RouterLink>      
      <RouterLink to="/contacts">Contacts</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
