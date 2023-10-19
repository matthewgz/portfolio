<template>
  <footer class="footer">
    <px-social-media />
    <p>
      Hecho por @matthewdrf. Copyright {{ year }} - Todos los derechos
      reservados.
    </p>
  </footer>
</template>

<script>
import PxSocialMedia from './PxSocialMedia.vue'

export default {
  name: 'PxFooter',
  components: { PxSocialMedia },
  computed: {
    year() {
      const today = new Date()

      return today.getFullYear()
    },
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: 24px 0;
}
</style>
