
<template>
    <main class="min-h-screen h-full overflow-auto bg-beige">
      <div class="mt-16">
        <h1 class="text-red font-mplus text-center font-black text-5xl lg:text-8xl xl:text-8xl">Podderzhka</h1>
        <p class="text-center font-mplus text-red text-xl lg:text-2xl xl:text-2xl">indie game developer</p>        

        <div class="mt-4 flex items-center justify-center">
          <ul class="lg:flex">
            <li v-for="link in links" :key="link.id" class="my-8 lg:my-0">
              <a :href="link.url" class="font-mplus text-red lg:text-green text-3xl lg:text-4xl xl:text-4xl">{{ link.title }}</a>
              <span v-if="!link.last" class="font-mplus text-red mx-4 hidden lg:inline lg:text-4xl xl:text-4xl">|</span>
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-center">
          <div class="w-10/12 lg:w-3/4 xl:w-1/2">
            <div v-for="game in games" :key="game.id" class="my-8">
              <div class="line bg-green h-0.5 mt-8"></div>
              <h2 class="font-mplus text-red font-bold mt-8 text-3xl lg:text-4xl xl:text-4xl">{{ game.title }}</h2>
              <p class="font-mplus text-red font-bold opacity-50 lg:text-xl xl:text-2xl">{{ game.release_date }}</p>
              <p class="font-mplus text-red my-8 lg:text-2xl xl:text-2xl">{{ game.description }}</p>              
              <a :href="game.steam" class="font-mplus text-green font-bold text-2xl lg:text-2xl xl:text-2xl">{{ game.link_text }}</a>
            </div>
          </div>
        </div>
      </div>
          
    </main>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 1, url: 'https://twitter.com/podderzhka_comp', title: 'twitter' },
        { id: 2, url: 'https://www.patreon.com/Podderzhka', title: 'patreon' },
        { id: 3, url: 'https://discord.com/invite/Fb9aeDDyrQ', title: 'discord', last: true}
      ],
      games: [
        { 
          id: 1,
          title: 'Just Date: Vegan',
          steam: '#',
          link_text: '🍑 Add to wishlists',
          description: "A next-generation date simulator with the best animation in the industry. The plot is getting tricky. Now you need to finish the date in the restaurant with the girl who doesn't eat meat! Zoomers... Anyway, this is your chance to get closer. Don't miss it!",          
          release_date: 'November 2024'
        },
        { 
          id: 2,
          title: 'Just Date',
          steam: 'https://store.steampowered.com/app/2417100/Just_Date/',
          link_text: '🫰 Buy on steam',
          description: 'A laggy buggy piece of software that someone decided to call a game. Nice animations though. Buy at your own risk or if you want to support the developer. Someone called it “frog date simulator”',
          release_date: 'Released'
        }
      ]
    };
  }
};
</script>
