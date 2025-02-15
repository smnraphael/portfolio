<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="flex flex-col h-full bg-slate-800 rounded-2xl">
    <div
      class="h-72 rounded-t-2xl bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + project.image + ')' }"
    ></div>
    <div
      class="bg-transparent p-4 rounded-b-2xl flex flex-col gap-5 justify-between flex-grow"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-between items-top gap-3">
          <h3 class="text-2xl font-medium">{{ project.title }}</h3>
          <p
            class="text-xs md:text-sm text-right text-slate-500 mt-1 md:whitespace-nowrap"
          >
            {{ project.date }}
          </p>
        </div>
        <p class="font-light text-slate-300">{{ project.content }}</p>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-wrap gap-x-2 gap-y-1">
          <span
            v-for="item in project.stack"
            :key="item"
            class="text-slate-300 border border-slate-700 rounded-full py-0.5 px-1.5 text-xs font-medium"
          >
            {{ item }}
          </span>
        </div>

        <div>
          <div>
            <a
              v-if="project.link.deployed"
              :href="project.link.deployed"
              target="_blank"
              class="text-sm font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >
              View project
            </a>
            <span v-if="project.link.deployed && project.link.github"> | </span>
            <a
              v-if="project.link.github"
              :href="project.link.github"
              target="_blank"
              class="text-sm font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-colors duration-300"
            >
              View GitHub repository
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
