<script setup lang="ts">
import { ref, watch } from 'vue';
import srcQuiz from '../data/quizes.json'

import QuizCard from '../components/QuizCard.vue';

const quizes = ref(srcQuiz);
const search = ref<string>('');

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase())
  })
});
</script>

<template>
  <header class="my-10 flex justify-between items-center">
    <h1 class="text-2xl font-semibold">Quiz</h1>
    <input 
      type="text" 
      placeholder="Search" 
      v-model.trim="search"
      class="p-1 border-2 rounded-md" />
  </header>
  <section class="flex flex-wrap gap-6">
    <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </section>
</template>