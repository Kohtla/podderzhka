<template>
  <main class="min-h-screen h-full overflow-auto bg-white">
    <div class="flex justify-end p-4">
      <select v-model="currentLanguage" class="p-2 border border-gray-300 rounded">
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>

    <div class="mt-16">
      <h1 class="text-soft-red font-mplus text-center font-black text-5xl lg:text-8xl xl:text-8xl">Podderzhka</h1>
      <p class="text-center font-mplus text-soft-red text-xl lg:text-2xl xl:text-2xl">{{ currentTranslations[1] }}</p>

      <div class="mt-4 flex items-center justify-center">
        <ul class="lg:flex">
          <li v-for="link in links" :key="link.id" class="my-8 lg:my-0">
            <a :href="link.url" class="font-mplus text-soft-red lg:text-blue text-3xl lg:text-4xl xl:text-4xl">{{
              link.title }}</a>
            <span v-if="!link.last"
              class="font-mplus text-soft-red mx-4 hidden lg:inline lg:text-4xl xl:text-4xl">|</span>
          </li>
        </ul>
      </div>

      <div class="flex items-center justify-center">
        <div class="w-10/12 lg:w-3/4 xl:w-1/2">
          <div v-for="game in games" :key="game.id" class="my-8">
            <div class="line bg-blue h-0.5 mt-8"></div>
            <h2 class="font-mplus text-soft-red font-bold mt-8 text-3xl lg:text-4xl xl:text-4xl">{{ game.title }}</h2>
            <p class="font-mplus text-soft-red font-bold opacity-50 lg:text-xl xl:text-2xl">{{ game.release_date }}</p>
            <p class="font-mplus text-soft-red my-8 lg:text-2xl xl:text-2xl">{{ game.description }}</p>
            <a :href="game.steam" class="font-mplus text-blue font-bold text-2xl lg:text-2xl xl:text-2xl">{{
              game.link_text }}</a>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { currentLanguage, currentTranslations } = useLanguage();

const links = ref([
  { id: 1, url: 'https://twitter.com/podderzhka_comp', title: 'twitter' },
  { id: 2, url: 'https://bsky.app/profile/justdate.bsky.social', title: 'bluesky' },
  { id: 3, url: 'https://www.patreon.com/Podderzhka', title: 'patreon' },
  { id: 4, url: 'https://discord.com/invite/Fb9aeDDyrQ', title: 'discord', last: true }
]);

const games = computed(() => [
  {
    id: 1,
    title: 'Just Date: Vegan',
    steam: 'https://store.steampowered.com/app/3032190/Just_Date_Vegan/?utm_source=podderzhka_website',
    link_text: currentTranslations.value?.[2] || '',
    description: currentTranslations.value?.[3] || '',
    release_date: currentTranslations.value?.[4] || ''
  },
  {
    id: 2,
    title: 'Just Date',
    steam: 'https://store.steampowered.com/app/2417100/Just_Date/?utm_source=podderzhka_website',
    link_text: currentTranslations.value?.[5] || '',
    description: currentTranslations.value?.[6] || '',
    release_date: currentTranslations.value?.[7] || ''
  }
]);
</script>
