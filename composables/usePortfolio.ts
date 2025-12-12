import { useState } from "nuxt/app"

export const usePortfolio = () => {
    return useState('portfolio', () => ({
        title: 'Soy Matthew',
        subtitle: '¡Hola mundo!',
        description:
            'Full Stack Developer especializado en crear experiencias web únicas. Me apasiona transformar diseños en realidad y resolver desafíos complejos en el Backend. ¡Trabajemos juntos para construir el futuro digital!',
        heroImageName: 'Matthew_Rosell_Felix.png',
        projects: [
            {
                id: 1,
                name: 'Earthquake',
                description:
                    'Plataforma web para visualizar información y localización de sismos en tiempo real.',
                labels: ['Nextjs', 'Styled Components', 'JavaScript'],
                image: 'earthquake.png',
                url: 'https://earthquake.matthewdrf.com',
                github: 'https://github.com/matthewgz/earthquake-nextjs',
            },
            {
                id: 2,
                name: 'Pugstagram',
                description:
                    'Clon de Instagram temático para Pugs, desarrollado con fines educativos para explorar Svelte.',
                labels: ['Svelte', 'JavaScript', 'CSS'],
                image: 'pugstagram.png',
                url: 'https://svelt-pugstagram.netlify.app',
                github: 'https://github.com/matthewgz/svelte-pugstagram',
            },
            {
                id: 3,
                name: 'Matthew',
                description:
                    'Portafolio personal desarrollado con Nuxt.js para exhibir mis proyectos y habilidades como desarrollador.',
                labels: ['Nuxtjs', 'JavaScript', 'CSS'],
                image: 'matthew.png',
                url: 'https://matthewdrf.com',
                github: 'https://github.com/matthewgz/portfolio',
            },
            {
                id: 4,
                name: 'VueExchange',
                description:
                    'Plataforma de intercambio de criptomonedas que muestra valores en tiempo real.',
                labels: ['Vuejs', 'JavaScript', 'CSS'],
                image: 'vue-exchange.png',
                url: 'https://vue-exchange-ptz.netlify.app/',
                github: 'https://github.com/matthewgz/vue-exchange',
            },
            {
                id: 5,
                name: 'Rooms',
                description:
                    'Aplicación tipo Airbnb para renta de cuartos. Backend en Firebase con autenticación y gestión de usuarios.',
                labels: ['Vuejs', 'Firebase', 'Heroku'],
                image: 'rooms.png',
                url: 'https://rooms-web.herokuapp.com/',
                github: 'https://github.com/matthewgz/rooms',
            },
            {
                id: 6,
                name: 'Platzi Video',
                description:
                    'Aplicación móvil en React Native para reproducción de videos, consumiendo una API externa.',
                labels: ['React Native', 'JavaScript'],
                image: 'platzi-video.png',
                github: 'https://github.com/matthewgz/PlatziVideo',
            },
        ],
        email: 'matthew.rosell.felix@gmail.com',
        phone: '+51950004308',
        linkedin:
            'https://www.linkedin.com/in/matthew-dominick-rosell-felix-a0380219b',
        github: 'https://github.com/matthewgz?tab=repositories',
    }))
}
