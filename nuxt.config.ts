import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/scripts"],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'REYVIC-DEV',
      link: [
        { rel: 'icon', type: 'image/jpg', href: '/assets/img/profile.jpg' }
      ]
    },
  },
});
