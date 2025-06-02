<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const router = useRouter();
const { quiz } = defineProps(['quiz']);

const goToQuiz = () => {
  router.push({ name: 'quiz', params: { id: quiz.id } });
}
</script>

<template>
    <div @click="goToQuiz" class="card rounded-lg shadow-md w-[300px]">
      <img :src="quiz.img" :alt="quiz.title" class="rounded-t-lg"/>
      <div class="px-3 py-2 flex flex-col gap-3">
        <h2 class="text-lg font-semibold">{{ quiz.title }}</h2>
        <p> {{ quiz.questions.length }} Question</p>
      </div>
    </div>
</template>