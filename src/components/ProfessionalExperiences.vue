<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const ExperienceCard = defineAsyncComponent(() =>
  import("./ProfessionalExperienceCard.vue")
);
const experiences = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  experiences.value = data.experiences;
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 lg:px-32"
    id="professional-experiences"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./professional-experiences
    </h2>

    <div v-if="experiences.length === 0">
      <p>Loading experiences...</p>
    </div>

    <div class="flex flex-col gap-5 mt-12">
      <ExperienceCard
        v-for="experience in experiences"
        :key="experience.title"
        :experience="experience"
      />
    </div>
  </section>
</template>
