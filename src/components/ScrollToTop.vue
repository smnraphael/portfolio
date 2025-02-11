<script setup>
import { ref, onMounted } from "vue";

const showButton = ref(false);

const checkScroll = () => {
  if (window.scrollY > 200) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});
</script>

<template>
  <div
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 border border-orange-400 p-2 cursor-pointer font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400"
  >
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
          d="M12 5V19M12 5L6 11M12 5L18 11"
          stroke="#F1F5F9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  </div>
</template>
