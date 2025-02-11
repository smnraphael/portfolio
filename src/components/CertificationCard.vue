<script setup>
defineProps({
  certification: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
    <div class="flex flex-col gap-2">
      <h3 class="text-2xl font-bold">{{ certification.course }}</h3>
      <p class="text-lg text-slate-400 font-semibold">
        {{ certification.school }}
      </p>
      <p class="text-sm text-slate-500">{{ certification.time }}</p>
    </div>
  </article>
</template>
