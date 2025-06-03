<script setup lang="ts">
import { useRouter } from 'vue-router';
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '@/data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id as string, 10);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
</script>

<template>
  <QuizHeader />
  <QuizContent :question="quiz?.questions[currentQuestionIndex]" />
</template>