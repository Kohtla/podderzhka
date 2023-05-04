<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="h-screen bg-gradient-to-br from-g-blue via-g-violet via-g-purple to-g-pink">
    <header>
      <nav class="flex items-center justify-between bg-blue py-8 px-8">
        <RouterLink to="/" class="font-inter font-black text-white text-2xl">Podderzhka</RouterLink>
        <ul class="flex">
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
    }
  }
}
</script>
