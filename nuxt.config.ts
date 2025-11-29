import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Matthew Rosell Felix',
            htmlAttrs: {
                lang: 'es',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { key: 'description', name: 'description', content: 'Soy un entusiasta Full Stack Developer con una pasión por dar vida a diseños inspiradores y enfrentar desafíos en el mundo del Backend. ¡Construyamos juntos el futuro digital!' },
                { key: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, development, software, frontend, backend, Full Stack' },
                { key: 'og:title', property: 'og:title', content: 'Matthew Rosell Felix' },
                { key: 'og:description', property: 'og:description', content: 'Soy un entusiasta Full Stack Developer con una pasión por dar vida a diseños inspiradores y enfrentar desafíos en el mundo del Backend. ¡Construyamos juntos el futuro digital!' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
    },
    modules: [
        '@nuxt/eslint'
    ]
})
