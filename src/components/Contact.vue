<script>
import linkedin from "@/assets/linkedin.svg";
</script>

<template>
  <section
    class="pb-20 min-h-screen px-8 lg:px-32 bg-slate-800"
    id="contact"
    data-aos="zoom-in-up"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent inline-block mt-12"
    >
      ./contact
    </h2>

    <div class="mt-24 flex flex-col justify-center items-center gap-10">
      <div class="w-4/5 text-center">
        <h3 class="text-3xl font-semibold mb-4">
          Feel free to reach out to me!
        </h3>
        <p class="text-lg">
          I'm available for collaboration and open to new opportunities.
        </p>
      </div>

      <div class="text-lg bg-slate-900 rounded-2xl p-6 flex flex-col gap-3">
        <div class="flex flex-col">
          <p>Email</p>
          <a
            href="mailto:simonraphael@hotmail.fr"
            class="font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >simonraphael@hotmail.fr</a
          >
        </div>

        <div class="flex flex-col">
          <p>Phone</p>
          <a
            href="tel:+1234567890"
            class="font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >+33 6 88 22 61 83</a
          >
        </div>

        <div class="flex flex-col">
          <p>LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/simonraphael/"
            target="_blank"
            class="font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >linkedin.com/in/smnraphael</a
          >
        </div>

        <div class="flex flex-col">
          <p>GitHub</p>
          <a
            href="https://github.com/smnraphael"
            target="_blank"
            class="font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >github.com/smnraphael</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
