<script setup lang="ts">
import { defineProps } from 'vue';

// const { question } = defineProps<{
//   question: {
//     id: number;
//     text: string;
//     answers: string[];
//   };
// }>();

const { question } = defineProps(['question'])
</script>

<template>
  <section class="mb-5">
    <h2 class="text-3xl font-semibold">{{ question.text }}</h2>
  </section>
  <section>
    <div v-for="option in question.answers" :key="option.id" class="flex mb-4 cursor-pointer"> <!-- option -->
      <p class="py-2 px-3 align-center bg-sky-500 font-semibold">{{ option.label }}</p>
      <div class="py-2 px-3 w-full bg-sky-200">{{ option.text }}</div>
    </div>
  </section>
</template>