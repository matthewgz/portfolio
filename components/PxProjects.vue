<template>
  <section class="projects">
    <h2 class="subtitle">Proyectos</h2>
    <p>
      Durante mi carrera como Frontend, he tenido el privilegio de trabajar en
      diferentes proyectos
    </p>
    <span>Aquí hay algunos que me gustaría compartir</span>
    <img class="arrow-svg" src="/svg/arrow.svg" alt="Flecha hacia abajo" />
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
  </section>
</template>

<script setup>
import PxProject from "./PxProject.vue";

const portfolio = usePortfolio();
const projects = computed(() => portfolio.value.projects);
</script>

<style scoped>
.projects {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.projects p {
  font-size: 24px;
  font-weight: normal;
  line-height: 28px;
  margin-bottom: 24px;
  max-width: 789px;
  text-align: center;
}

.projects span {
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 24px;
  text-align: center;
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

  .projects span {
    font-size: 24px;
    line-height: 28px;
  }

  .arrow-svg {
    margin-bottom: 120px;
  }
}
</style>
