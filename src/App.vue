<script setup>
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const Hero = defineAsyncComponent(() => import("@/components/Hero.vue"));
const Projects = defineAsyncComponent(() =>
  import("@/components/Projects.vue")
);
const ProfessionalExperiences = defineAsyncComponent(() =>
  import("@/components/ProfessionalExperiences.vue")
);
const Education = defineAsyncComponent(() =>
  import("@/components/Education.vue")
);
const Certifications = defineAsyncComponent(() =>
  import("@/components/Certifications.vue")
);
const Contact = defineAsyncComponent(() => import("@/components/Contact.vue"));
const ScrollToTop = defineAsyncComponent(() =>
  import("@/components/ScrollToTop.vue")
);
</script>

<template>
  <div class="bg-slate-900 min-h-screen text-slate-100">
    <Navbar />
    <Hero />
    <Projects />
    <ProfessionalExperiences />
    <Education />
    <Certifications />
    <Contact />
    <ScrollToTop />
  </div>
</template>
