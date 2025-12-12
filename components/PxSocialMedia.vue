<template>
  <div>
    <a
      :href="linkedin"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitar mi perfil de LinkedIn"
    >
      <img class="social-img" src="/svg/linkedin.svg" alt="LinkedIn" />
    </a>
    <a
      :href="github"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitar mi perfil de GitHub"
    >
      <img class="social-img" src="/svg/github.svg" alt="GitHub" />
    </a>
    <a :href="`mailto:${email}`" aria-label="Enviarme un correo electrónico">
      <img class="social-img" src="/svg/email.svg" alt="Email" />
    </a>
    <a :href="`tel:${phone}`" aria-label="Llamarme por teléfono">
      <img class="social-img" src="/svg/phone.svg" alt="Teléfono" />
    </a>
  </div>
</template>

<script setup>
const portfolio = usePortfolio();
const linkedin = computed(() => portfolio.value.linkedin);
const github = computed(() => portfolio.value.github);
const phone = computed(() => portfolio.value.phone);
const email = computed(() => portfolio.value.email);
</script>

<style scoped>
.social-img {
  width: 40px;
  margin-right: 16px;
  cursor: pointer;
}
</style>
