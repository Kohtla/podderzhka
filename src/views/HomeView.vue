<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
  <main>
    <h1 class="font-inter font-black text-9xl pl-20 pt-20 text-white">Podderzhka</h1>
    <h2 class="font-inter font-thin text-3xl pl-20 pt-5 text-white">CREATING OUR FIRST GAME</h2>
    <ul class="flex mt-16 pl-20">
      <li>
        <RouterLink to="/games" class="bg-yellow text-white py-8 px-10 font-black rounded-xl hover:bg-press-yellow">ABOUT THE GAME</RouterLink>
      </li>
      <li>
        <RouterLink to="/press" class="bg-pink text-white ml-10 py-8 px-10 font-black rounded-xl hover:bg-press-pink">PRESS KIT</RouterLink>
      </li>
    </ul>
  </main>
</template>
