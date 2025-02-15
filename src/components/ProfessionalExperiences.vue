<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const ExperienceCard = defineAsyncComponent(() =>
  import("./ProfessionalExperienceCard.vue")
);
const professionalExperiences = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  professionalExperiences.value = data.professionalExperiences;
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 md:px-12 lg:px-24 xl:px-32"
    id="professional-experiences"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12 w-fit [text-fill-color:transparent] sm:[text-fill-color:inherit]"
    >
      ./professional-experiences
    </h2>

    <div v-if="professionalExperiences.length === 0" class="text-center mt-6">
      <p>Loading experiences...</p>
    </div>

    <div class="flex flex-col gap-5 mt-12">
      <ExperienceCard
        v-for="experience in professionalExperiences"
        :key="experience.title"
        :experience="experience"
      />
    </div>
  </section>
</template>
