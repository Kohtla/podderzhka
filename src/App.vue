<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="min-h-screen h-full overflow-auto bg-gradient-to-br from-g-blue via-g-violet via-g-purple to-g-pink">
    <header>
      <nav class="flex items-center justify-between bg-blue py-8 px-8" x-data="{ isOpen: false }">
        <RouterLink to="/" class="font-inter font-black text-white text-2xl">Podderzhka</RouterLink>
        
        <div class="flex md:hidden" @click="isOpen = !isOpen">
          <button type="button" class="text-white hover:text-white focus:outline-none focus:text-white" aria-label="Open the menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul class="hidden md:flex">
          <li>
            <RouterLink to="/news" :class="isActive('/news', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4')">
              News</RouterLink>
          </li>
          <li>
            <RouterLink to="/games" :class="isActive('/games', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4')">
              Games</RouterLink>
          </li>
          <li>
            <RouterLink to="/investors" :class="isActive('/investors', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4')">
              For Investors</RouterLink>
          </li>
          <li>
            <RouterLink to="/press" :class="isActive('/press', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4')">
              Press Kit</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacts" :class="isActive('/contacts', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4')">
              Contacts</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col bg-press-blue items-center" v-show="isOpen">
        <RouterLink to="/news" :class="isActive('/news', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4 my-4')">
          News</RouterLink>

        <RouterLink to="/games" :class="isActive('/games', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4 mb-4')">
          Games</RouterLink>

        <RouterLink to="/investors" :class="isActive('/investors', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4 mb-4')">
          For Investors</RouterLink>

        <RouterLink to="/press" :class="isActive('/press', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4 mb-4')">
          Press Kit</RouterLink>

        <RouterLink to="/contacts" :class="isActive('/contacts', 'font-bold text-white', 'text-light-blue', 'font-inter hover:text-white mx-4 mb-4')">
          Contacts</RouterLink>
      </div>          
    </header>

    <RouterView />
  </main>
</template>

<script>
export default {
  methods: {
    isActive(path, activeClass, inactiveClass, baseClass) {
      let conditionalClass = this.$route.path === path ? activeClass : inactiveClass;
      return baseClass + ' ' + conditionalClass;
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },

}
</script>
