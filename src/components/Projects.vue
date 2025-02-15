<script setup>
import { defineAsyncComponent, ref, onMounted, computed } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronDown } from "oh-vue-icons/icons";

addIcons(BiChevronDown);

const ProjectCard = defineAsyncComponent(() => import("./ProjectCard.vue"));
const projects = ref([]);
const selectedFilter = ref("all");

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  projects.value = data.projects;
});

const filteredProjects = computed(() => {
  if (selectedFilter.value === "all") {
    return projects.value;
  }
  return projects.value.filter((project) =>
    selectedFilter.value === "professional" ? project.pro : !project.pro
  );
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 md:px-12 lg:px-24 xl:px-32"
    id="projects"
    data-aos="zoom-in-up"
  >
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12 w-fit [text-fill-color:transparent] sm:[text-fill-color:inherit]"
      >
        ./projects
      </h2>

      <div class="mt-6 flex gap-3 items-center">
        <label for="filter" class="font-semibold text-slate-300"
          >Filter by:</label
        >
        <div class="relative">
          <select
            id="filter"
            v-model="selectedFilter"
            class="px-3 py-2 pr-10 w-full bg-slate-800 text-white rounded-md appearance-none"
          >
            <option value="all">All</option>
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
          </select>
          <OhVueIcon
            name="bi-chevron-down"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
          />
        </div>
      </div>
    </div>

    <div v-if="filteredProjects.length === 0" class="text-center mt-6">
      <p>No project found.</p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 sm:mt-12 items-stretch"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
