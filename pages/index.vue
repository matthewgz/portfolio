<template>
  <main class="container">
    <px-hero />
    <px-projects />
  </main>
</template>

<script>
import PxHero from '@/components/PxHero'
import PxProjects from '@/components/PxProjects.vue'

export default {
  components: { PxHero, PxProjects },
}
</script>

<style scoped>
.container {
  margin: 0 16px;
}
</style>
