<script setup>
import { ref } from "vue";

const menu = ref([
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Professional experiences", href: "#professional-experiences" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header class="flex justify-between items-center p-4 lg:px-8 relative z-20">
    <div>
      <p class="text-xl md:text-2xl lg:text-3xl font-bold">Raphaël SIMON</p>
    </div>

    <div class="md:hidden z-30">
      <button type="button" class="block" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-3xl">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#F1F5F9"
              />
            </g>
          </svg>
        </span>
        <span v-else class="text-3xl">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18L20 18"
                stroke="#F1F5F9"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#F1F5F9"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#F1F5F9"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </span>
      </button>
    </div>

    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center md:relative backdrop-blur-2xl md:bg-transparent md:flex md:justify-between md:flex-row',
        isMenuOpen ? 'block' : 'hidden',
      ]"
    >
      <ul
        class="flex flex-col justify-between gap-2 lg:gap-5 items-center md:flex-row"
      >
        <li v-for="item in menu" :key="item.name" class="text-center">
          <a
            :href="item.href"
            class="text-md md:text-lg font-semibold bg-gradient-to-r from-slate-100 to-slate-100 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300 inline-flex items-center justify-center whitespace-nowrap"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
