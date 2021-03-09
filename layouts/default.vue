<template>
  <fragment>
    <px-header />
    <Nuxt />
    <px-footer />
  </fragment>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import PxFooter from '@/components/PxFooter.vue'

export default {
  name: 'Default',
  components: { PxHeader, PxFooter },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(
    90.04deg,
    #f2cb05 -0.87%,
    #f2e205 -0.86%,
    #d9a404 99.97%
  );
  font-family: 'Raleway', sans-serif;
}

.subtitle {
  font-size: 36px;
  margin-bottom: 16px;
}

.description {
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
}

a {
  text-decoration: none;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
