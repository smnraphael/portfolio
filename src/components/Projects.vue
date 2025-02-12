<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const ProjectCard = defineAsyncComponent(() => import("./ProjectCard.vue"));
const projects = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  projects.value = data.projects;
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 lg:px-32"
    id="projects"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./projects
    </h2>

    <div v-if="projects.length === 0" class="text-center">
      <p>Loading projects...</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 items-stretch">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
