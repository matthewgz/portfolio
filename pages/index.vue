<template>
  <main class="container">
    <px-hero />
    <px-projects />
  </main>
</template>

<script setup>
import PxHero from "@/components/PxHero.vue";
import PxProjects from "@/components/PxProjects.vue";
</script>

<style scoped>
.container {
  margin: 0 16px;
}
</style>
