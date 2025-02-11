<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const CertificationCard = defineAsyncComponent(() =>
  import("./CertificationCard.vue")
);
const certifications = ref([]);

onMounted(async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  certifications.value = data.certifications;
});

console.log(certifications);
</script>

<template>
  <section
    class="pb-20 min-h-screen px-12 lg:px-32"
    id="certifications"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./certifications
    </h2>

    <div v-if="certifications.length === 0">
      <p>Loading certifications...</p>
    </div>

    <!-- Grid for certifications -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <CertificationCard
        v-for="cert in certifications"
        :key="cert.course"
        :certification="cert"
      />
    </div>
  </section>
</template>
