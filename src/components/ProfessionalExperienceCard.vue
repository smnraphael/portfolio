<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
    <div class="flex flex-col gap-2">
      <div>
        <div class="flex justify-between">
          <h3 class="text-2xl font-bold">{{ experience.position }}</h3>
          <p class="text-sm text-gray-500 text-right">
            {{ experience.date }}
          </p>
        </div>
        <p class="text-lg text-gray-400">
          <span class="font-semibold">{{ experience.company }}</span> |
          <span class="text-sm"> {{ experience.location }}</span>
        </p>
      </div>
      <div>
        <a
          :href="experience.link"
          target="_blank"
          class="text-sm font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
        >
          Visit company website
        </a>
      </div>
    </div>
  </article>
</template>
