<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between gap-2 h-full">
      <div>
        <div>
          <div class="flex justify-between">
            <h3 class="text-2xl font-bold">{{ education.degree }}</h3>
            <p class="text-sm text-gray-500 text-right">{{ education.date }}</p>
          </div>
          <p class="text-lg text-gray-400">
            <span class="font-semibold">{{ education.school }}</span> |
            <span class="text-sm"> {{ education.location }}</span>
          </p>
        </div>

        <div>
          <ul class="list-disc text-sm text-gray-300">
            <li
              v-for="(item, index) in education.content.split('\n')"
              :key="index"
              class="list-none"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <a
          :href="education.link"
          target="_blank"
          class="text-sm font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
        >
          Visit school website
        </a>
      </div>
    </div>
  </article>
</template>
