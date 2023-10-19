<template>
  <section class="hero">
    <img
      class="hero-img"
      :src="require(`~/assets/image/${heroImageName}`)"
      alt="Foto de Matthew Rosell Felix"
    />
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

<script>
import PxSocialMedia from './PxSocialMedia.vue'

export default {
  name: 'PxHero',
  components: { PxSocialMedia },
  computed: {
    title() {
      return this.$store.getters.getTitle
    },
    subtitle() {
      return this.$store.getters.getSubtitle
    },
    description() {
      return this.$store.getters.getDescription
    },
    heroImageName() {
      return this.$store.getters.getHeroImageName
    },
  },
}
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
