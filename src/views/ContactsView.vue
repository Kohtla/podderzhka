<template>
  <main class="flex justify-center">
    <div class="mt-10 mx-5 px-8 py-8 bg-blue rounded-xl max-w-sm">
      <h1 class="font-inter font-black text-xl text-white">Hi!</h1>

      <p class="text-white mt-4 break-word">I'm Alex, the programmer. I've decided to quit my job and dive into gamedev.
        My first game is "Just Date" - a simple nsfw dating sim. Feel free to contact me in my twitter.
        And don't forget to visit Just Date steam page!
      </p>

      <h1 class="font-inter font-black text-l text-white mt-5">You can find me here</h1>
      
      <a href="https://twitter.com/podderzhka_comp">
        <div class="flex justify-center hover:bg-press-blue py-3 rounded-xl mt-6">        
          <svg class="w-6 h-6 fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          <span class="font-inter font-bold text-white ml-2">Twitter</span>
        </div>
      </a>
      <a href="https://patreon.com/Podderzhka">
        <div class="flex justify-center hover:bg-press-blue py-3 rounded-xl mt-3">        
          <svg class="w-5 h-5 fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65c0 4.755 3.877 8.623 8.641 8.623c4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z"/></svg>
          <span class="font-inter font-bold text-white ml-2">Patreon</span>
        </div>
      </a>
      <a href="https://store.steampowered.com/app/2417100/Just_Date/">
        <div class="flex justify-center hover:bg-press-blue py-3 rounded-xl mt-3">        
          <svg class="w-6 h-6 fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/> <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"/></svg>
          <span class="font-inter font-bold text-white ml-2">The Game</span>
        </div>
      </a>
      <a href="https://discord.gg/Fb9aeDDyrQ">
        <div class="flex justify-center hover:bg-press-blue py-3 rounded-xl mt-3">         
          <svg class="w-6 h-6 fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/></svg>
          <span class="font-inter font-bold text-white ml-2">Discord</span>
        </div>
      </a>
      
    </div>
  </main>
</template>