<script setup>
import { ref, onMounted } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiStyledcomponents,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiSlack,
  SiMicrosoftteams,
  SiFigma,
  IoLanguage,
  BiCode,
} from "oh-vue-icons/icons";

addIcons(
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiStyledcomponents,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiSlack,
  SiMicrosoftteams,
  SiFigma,
  IoLanguage,
  BiCode
);

const skills = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  skills.value = data.skills;
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 md:px-12 lg:px-24 xl:px-32"
    id="skills"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12 w-fit [text-fill-color:transparent] sm:[text-fill-color:inherit]"
    >
      ./skills
    </h2>

    <!-- Technologies & Frameworks -->
    <div class="mt-12">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Languages & Frameworks
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <p
          v-for="skill in skills.technologiesFrameworks"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- Testing & Automation -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Testing & Automation
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <p
          v-for="skill in skills.testingAutomation"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- Version Control & Collaboration -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Version Control & Collaboration
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <p
          v-for="skill in skills.versionControlCollaboration"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- Languages -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">Languages</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <p
          v-for="skill in skills.languages"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>
  </section>
</template>
