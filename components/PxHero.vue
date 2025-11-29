<template>
  <section class="hero">
    <img
      class="hero-img"
      :src="`/image/${heroImageName}`"
      alt="Foto de Matthew Rosell Felix"
    >
    <div>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h1 class="title">{{ title }}</h1>
      <p class="description">
        {{ description }}
      </p>
      <px-social-media />
    </div>
  </section>
</template>

<script setup>
import PxSocialMedia from "./PxSocialMedia.vue";

const portfolio = usePortfolio();
const title = computed(() => portfolio.value.title);
const subtitle = computed(() => portfolio.value.subtitle);
const description = computed(() => portfolio.value.description);
const heroImageName = computed(() => portfolio.value.heroImageName);
</script>

<style scoped>
.hero {
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
}

.hero-img {
  padding: 0 24px;
  width: 100%;
  max-width: 458px;
  margin: 0 auto;
  margin-bottom: 24px;
}

.title {
  font-size: 48px;
  margin-bottom: 24px;
}

.hero p {
  margin-bottom: 24px;
  text-align: justify;
  font-weight: 500;
  max-width: 679px;
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 140px;
  }

  .title {
    font-size: 64px;
    line-height: 75px;
  }

  .subtitle {
    font-size: 48px;
    line-height: 56px;
  }

  .hero p {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
