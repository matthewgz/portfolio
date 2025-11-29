<template>
  <div>
    <a :href="linkedin" target="_blank" rel="noopener noreferrer">
      <img class="social-img" src="/svg/linkedin.svg" alt="Logo de Linkedin" >
    </a>
    <a :href="github" target="_blank" rel="noopener noreferrer">
      <img class="social-img" src="/svg/github.svg" alt="Logo de Github" >
    </a>
    <a :href="`mailto:${email}`">
      <img class="social-img" src="/svg/email.svg" alt="Logo de Email" >
    </a>
    <a :href="`tel:${phone}`">
      <img class="social-img" src="/svg/phone.svg" alt="Logo de Phone" >
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
