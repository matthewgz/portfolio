<template>
  <div class="project">
    <img
      class="project-image"
      :src="require(`~/assets/image/projects/${image}`)"
      alt="Imagen del proyecto"
    />
    <div>
      <h2 class="subtitle">{{ name }}</h2>
      <p class="description">
        {{ description }}
      </p>
      <div class="labels-container">
        <div v-for="(label, index) in labels" :key="index" class="label">
          {{ label }}
        </div>
      </div>
      <div class="buttons-container">
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
          <div class="button primary">VER PROYECTO</div>
        </a>
        <a :href="github" target="_blank" rel="noopener noreferrer">
          <div class="button secundary">
            <img
              class="svg"
              src="~/assets/svg/github.svg"
              alt="Logo de Github"
            />
            VER CÓDIGO
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PxProject',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    labels: {
      type: Array,
      default: () => [1],
    },
    image: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.project {
  margin-bottom: 80px;
}

.project-image {
  width: 100%;
}

.description {
  font-weight: normal;
  margin-bottom: 16px;
}

.labels-container {
  display: flex;
  margin-bottom: 24px;
}

.label {
  align-items: center;
  background: #4a44f2;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  font-size: 12px;
  height: 20px;
  justify-content: center;
  line-height: 14px;
  margin-right: 16px;
  min-width: 80px;
  padding: 0 8px;
}

.label:last-child {
  margin-right: 0;
}

.buttons-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.buttons-container a {
  margin-bottom: 16px;
}

.buttons-container a:last-child {
  margin-bottom: 0px;
}

.button {
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  height: 37px;
  justify-content: center;
  width: 183px;
}

.button:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
}

.primary {
  background: #7503a6;
  color: #fff;
}

.secundary {
  border: 2px solid #7503a6;
  color: #000;
}

.svg {
  margin-right: 8px;
  width: 18px;
}

@media (min-width: 1024px) {
  .project {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project:nth-child(even) {
    flex-direction: row-reverse;
  }

  .buttons-container {
    flex-direction: row;
  }

  .buttons-container a {
    margin-bottom: 0;
    margin-right: 16px;
  }

  .buttons-container a:last-child {
    margin-right: 0px;
  }
}
</style>
