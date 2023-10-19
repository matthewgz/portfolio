<template>
  <a href="/Matthew.pdf" download>
    <div class="curriculum mobile">CURRÍCULUM</div>
    <div class="curriculum desktop">DESCARGAR CURRÍCULUM</div>
  </a>
</template>

<script>
export default {
  name: 'PxCurriculum',
}
</script>

<style scoped>
.curriculum {
  align-items: center;
  background: #7503a6;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  height: 37px;
  justify-content: center;
  min-width: 149px;
  padding: 0 16px;
}

.mobile {
  display: flex;
}
.desktop {
  display: none;
}

.curriculum:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
}

@media (min-width: 768px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: flex;
  }
}
</style>
