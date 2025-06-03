<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  'quizQuestionLength',
  'numberOfCorrectAnswers',
]);
const goToHome = () => {
  router.push({ name: 'home'});
}
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <h2 class="text-xl">Score : </h2>
    <h1 class="text-9xl">{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
    <button class="mt-7 text-black font-semibold cursor-pointer" @click="goToHome">&#8592; Back</button>
  </section>
</template>