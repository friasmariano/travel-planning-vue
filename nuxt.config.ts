// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
            ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }], 
            '@nuxt/devtools' ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/fontawesome.js'],
  imports: {
    dirs: ['stores']
  }
})
