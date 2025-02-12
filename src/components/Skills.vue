<script setup>
import { ref, onMounted } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiStorybook,
  SiFigma,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGoogleanalytics,
  SiAdobe,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiSlack,
  SiMicrosoftteams,
  BiCode,
} from "oh-vue-icons/icons";

addIcons(
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiStorybook,
  SiFigma,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGoogleanalytics,
  SiAdobe,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiSlack,
  SiMicrosoftteams,
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
  <section class="pb-20 min-h-screen px-8 lg:px-32" id="skills">
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./skills
    </h2>

    <!-- Languages & Frameworks -->
    <div class="mt-12">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Languages & Frameworks
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <p
          v-for="skill in skills.languagesFrameworks"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- UI & Styling -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        UI & Styling
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <p
          v-for="skill in skills.uiStyling"
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
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
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

    <!-- Databases & APIs -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Databases & APIs
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <p
          v-for="skill in skills.databasesApis"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- Analytics & Tracking -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Analytics & Tracking
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <p
          v-for="skill in skills.analyticsTracking"
          :key="skill.name"
          class="text-sm md:text-lg font-medium bg-slate-800 p-3 rounded-lg flex items-center gap-2"
        >
          <OhVueIcon :name="skill.icon" />
          {{ skill.name }}
        </p>
      </div>
    </div>

    <!-- Version Control & Tools -->
    <div class="mt-8">
      <h3 class="text-xl md:text-2xl font-semibold text-gray-200">
        Version Control & Tools
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <p
          v-for="skill in skills.versionControlTools"
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
