<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const EducationCard = defineAsyncComponent(() => import("./EducationCard.vue"));
const education = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  education.value = data.education;
});
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 lg:px-32"
    id="education"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./education
    </h2>

    <div v-if="education.length === 0" class="text-center">
      <p>Loading education...</p>
    </div>

    <!-- Grid for education cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
      <EducationCard
        v-for="edu in education"
        :key="edu.degree"
        :education="edu"
      />
    </div>
  </section>
</template>
