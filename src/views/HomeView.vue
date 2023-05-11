<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
  <main>
    <h1 class="font-inter font-black text-white text-6xl pl-5 pt-5 md:text-9xl md:pl-20 md:pt-20">Podderzhka</h1>
    <h2 class="font-inter font-thin text-white text-xl pl-5 md:text-3xl md:pl-20 md:pt-5">CREATING OUR FIRST GAME</h2>
    <ul class="pl-5 pt-5 flex flex-col md:flex md:flex-row md:mt-16 md:pl-20">
      <li class="mt-5 md:mt-0">
        <RouterLink to="/games" class="bg-yellow text-white font-black hover:bg-press-yellow py-4 px-6 md:py-8 md:px-10 rounded-xl">ABOUT THE GAME</RouterLink>
      </li>
      <li class="mt-12 md:mt-0">
        <RouterLink to="/press" class="bg-pink text-white font-black hover:bg-press-pink py-4 px-6 md:ml-10 md:py-8 md:px-10 rounded-xl">PRESS KIT</RouterLink>
      </li>
    </ul>
  </main>
</template>
