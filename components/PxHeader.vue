<template>
  <header>
    <div class="header">
      <img src="/image/Logo.png" alt="Logo de Matthew Rosell Felix" />
      <px-curriculum />
    </div>
  </header>
</template>

<script setup>
import PxCurriculum from "./PxCurriculum.vue";
</script>

<style scoped>
.header {
  margin: 32px 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
