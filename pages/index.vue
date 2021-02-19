<template>
  <div class="container">
    <px-hero />
    <px-projects />
    <px-footer />
  </div>
</template>

<script>
import PxHero from '@/components/PxHero'
import PxProjects from '@/components/PxProjects.vue'
import PxFooter from '@/components/PxFooter.vue'

export default {
  components: { PxHero, PxProjects, PxFooter },
}
</script>

<style scoped>
.container {
  margin: 0 16px;
}
</style>
