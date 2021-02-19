<template>
  <header>
    <div class="header">
      <img src="~/assets/image/Logo.png" alt="Logo" />
      <px-curriculum />
    </div>
  </header>
</template>

<script>
import PxCurriculum from './PxCurriculum'

export default { name: 'PxHeader', components: { PxCurriculum } }
</script>

<style scoped>
.header {
  margin: 32px 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
