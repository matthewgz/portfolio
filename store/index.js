export const state = () => ({
  title: 'Soy Matthew',
  subtitle: '¡Hola mundo!',
  description:
    'Full Stack Developer que le apasiona implementar diseños que inspiran y también aceptar los desafíos del mundo Backend.',
  heroImageName: 'Hero.png',
  projects: [
    {
      id: 1,
      name: 'Earthquake',
      description:
        'Es una web donde se muestra información y localización de los sismos ocurridos.',
      labels: ['Nextjs', 'Styled Components', 'JavaScript'],
      image: 'earthquake.png',
      url: 'http://earthquake-nextjs.vercel.app',
      github: 'https://github.com/matthewgz/earthquake-nextjs',
    },
    {
      id: 2,
      name: 'Pugstagram',
      description:
        'Es una copia de instagram pero para Pugs,fue realizado con fines educativos.',
      labels: ['Svelte', 'JavaScript', 'CSS'],
      image: 'pugstagram.png',
      url: 'https://svelt-pugstagram.netlify.app',
      github: 'https://github.com/matthewgz/svelte-pugstagram',
    },
    {
      id: 3,
      name: 'Matthew',
      description:
        'Es la página web de mi portafolio, donde muestro algunos mis proyectos.',
      labels: ['Nuxtjs', 'JavaScript', 'CSS'],
      image: 'matthew.png',
      url: 'https://matthewdrf.com',
      github: 'https://github.com/matthewgz/portfolio',
    },
    {
      id: 4,
      name: 'VueExchange',
      description:
        'Plataforma que muestra todas las criptomonedas y sus valores en tiempo real.',
      labels: ['Vuejs', 'JavaScript', 'CSS'],
      image: 'vue-exchange.png',
      url: 'https://vue-exchange-ptz.netlify.app/',
      github: 'https://github.com/matthewgz/vue-exchange',
    },
    {
      id: 5,
      name: 'Rooms',
      description:
        'Aplicación ficticia de renta de cuartos como Airbnb. Utilizando Firebase como backend, implementa registro de usuarios, permisos, inicio de sesión, etc.',
      labels: ['Vuejs', 'Firebase', 'Heroku'],
      image: 'rooms.png',
      url: 'https://rooms-web.herokuapp.com/',
      github: 'https://github.com/matthewgz/rooms',
    },
    {
      id: 6,
      name: 'Platzi Video',
      description:
        'Aplicación realizado con react native, se muestra y reproducen videos obtenidos de API free.',
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
})

export const getters = {
  getTitle(state) {
    return state.title
  },
  getSubtitle(state) {
    return state.subtitle
  },
  getDescription(state) {
    return state.description
  },
  getHeroImageName(state) {
    return state.heroImageName
  },
  getProjects(state) {
    return state.projects
  },
  getEmail(state) {
    return state.email
  },
  getPhone(state) {
    return state.phone
  },
  getLinkedin(state) {
    return state.linkedin
  },
  getGithub(state) {
    return state.github
  },
}
