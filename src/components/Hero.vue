<script setup>
import AOS from "aos";
import "aos/dist/aos";
import picture from "@/assets/picture.jpg";
import resume from "@/assets/resume.pdf";

AOS.init();
</script>

<template>
  <section
    class="relative w-full h-screen lg:px-32 flex items-center justify-center"
    data-aos="zoom-in-up"
  >
    <div class="flex justify-center items-center">
      <div
        class="flex justify-center items-center flex-col md:flex-row gap-16 md:gap-10 px-6 text-center md:text-left"
      >
        <div
          class="flex justify-center md:w-[50%] flex-col h-full gap-5 md:pl-10 -mt-24 md:-mt-12"
        >
          <h1 class="font-bold text-3xl md:text-5xl lg:text-6xl">
            Hi, I'm
            <span
              class="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
              >Raphaël</span
            >
            👋
          </h1>
          <p class="text-slate-300 font-light">
            Software Engineer specializing in TypeScript and React, with 3 years
            of experience developing scalable web applications. I enjoy writing
            clean, modular, and maintainable code, and I have contributed to
            solutions that improved eﬃciency and reduced costs. Comfortable in
            international environments, with management experience, I easily
            adapt to teams and new challenges.
          </p>
          <div class="flex gap-5 justify-center items-center md:justify-start">
            <a
              href="#contact"
              class="rounded-full bg-gradient-to-r from-orange-400 to-pink-400 border border-orange-400 px-6 py-2 cursor-pointer font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400"
            >
              Hire me
            </a>

            <a
              :href="resume"
              target="_blank"
              class="rounded-full border border-orange-400 px-6 py-2 flex items-center space-x-2 cursor-pointer"
            >
              <span>
                <svg
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#fb923c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path
                      d="m3 15c0 2.8284 0 4.2426 0.87868 5.1213s2.2929 0.8787 5.1213 0.8787h6c2.8284 0 4.2426 0 5.1213-0.8787s0.8787-2.2929 0.8787-5.1213"
                    />
                    <path d="m12 3v13l4-4.375m-4 4.375-4-4.375" />
                  </g>
                </svg>
              </span>
              <p
                class="font-medium bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-all duration-300"
              >
                Download resume
              </p>
            </a>
          </div>
        </div>
        <div
          class="flex justify-center md:w-[50%] items-center h-full mt-12 md:-mt-12"
        >
          <div class="rounded-full p-2 border border-orange-400">
            <img
              :src="picture"
              alt="Profile Picture"
              class="h-48 md:h-64 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
