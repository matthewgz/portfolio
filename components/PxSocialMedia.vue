<template>
  <div>
    <a :href="linkedin" target="_blank" rel="noopener noreferrer">
      <img
        class="social-img"
        src="~/assets/svg/linkedin.svg"
        alt="Logo de Linkedin"
      />
    </a>
    <a :href="github" target="_blank" rel="noopener noreferrer">
      <img
        class="social-img"
        src="~/assets/svg/github.svg"
        alt="Logo de Github"
      />
    </a>
    <a :href="`mailto:${email}`">
      <img
        class="social-img"
        src="~/assets/svg/email.svg"
        alt="Logo de Email"
      />
    </a>
    <a :href="`tel:${phone}`">
      <img
        class="social-img"
        src="~/assets/svg/phone.svg"
        alt="Logo de Phone"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'PxSocialMedia',
  computed: {
    linkedin() {
      return this.$store.getters.getLinkedin
    },
    github() {
      return this.$store.getters.getGithub
    },
    phone() {
      return this.$store.getters.getPhone
    },
    email() {
      return this.$store.getters.getEmail
    },
  },
}
</script>

<style scoped>
.social-img {
  width: 40px;
  margin-right: 16px;
  cursor: pointer;
}
</style>
