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
                { key: 'description', name: 'description', content: 'Soy Matthew Rosell Felix, Full Stack Developer especializado en crear experiencias web únicas. Me apasiona transformar diseños en realidad y resolver desafíos complejos en el Backend.' },
                { key: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, development, software, frontend, backend, full stack, web developer, portfolio, matthew rosell felix' },
                { name: 'author', content: 'Matthew Rosell Felix' },
                { name: 'robots', content: 'index, follow' },
                { key: 'og:title', property: 'og:title', content: 'Matthew Rosell Felix - Full Stack Developer' },
                { key: 'og:description', property: 'og:description', content: 'Soy Matthew Rosell Felix, Full Stack Developer especializado en crear experiencias web únicas. Me apasiona transformar diseños en realidad y resolver desafíos complejos en el Backend.' },
                { key: 'og:image', property: 'og:image', content: 'https://matthewdrf.com/image/Matthew_Rosell_Felix.png' },
                { key: 'og:url', property: 'og:url', content: 'https://matthewdrf.com' },
                { key: 'og:type', property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Matthew Rosell Felix - Full Stack Developer' },
                { name: 'twitter:description', content: 'Soy Matthew Rosell Felix, Full Stack Developer especializado en crear experiencias web únicas.' },
                { name: 'twitter:image', content: 'https://matthewdrf.com/image/Matthew_Rosell_Felix.png' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
    },
    modules: [
        '@nuxt/eslint'
    ]
})
