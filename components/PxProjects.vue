<template>
  <div class="projects">
    <p>
      Durante mi carrera como Frontend, he tenido el privilegio de trabajar en
      diferentes proyectos
    </p>
    <h6>Aquí hay algunos que me gustaría compartir</h6>
    <img
      class="arrow-svg"
      src="~/assets/svg/arrow.svg"
      alt="Flecha hacia abajo"
    />
    <px-project
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
      :labels="project.labels"
      :image="project.image"
      :url="project.url"
      :github="project.github"
    />
  </div>
</template>

<script>
import PxProject from './PxProject.vue'

export default {
  name: 'PxProjects',
  components: { PxProject },
  computed: {
    projects() {
      return this.$store.getters.getProjects
    },
  },
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects p {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 24px;
  max-width: 789px;
}

.projects h6 {
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 24px;
}

.arrow-svg {
  width: 64px;
  margin: 0 auto;
  margin-bottom: 80px;
}

@media (min-width: 768px) {
  .projects p {
    font-size: 36px;
    line-height: 42px;
  }

  .projects h6 {
    font-size: 24px;
    line-height: 28px;
  }

  .arrow-svg {
    margin-bottom: 120px;
  }
}
</style>
