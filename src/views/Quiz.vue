<script setup lang="ts">
import { useRouter } from 'vue-router';
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import QuizResult from '@/components/QuizResult.vue';
import { computed, ref } from 'vue';
// import { watch } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '@/data/quizes.json';

import type { Quiz } from '@/types/index.ts';

const route = useRoute();
const router = useRouter();


const quizId = parseInt(route.params.id as string, 10);
const quiz = quizes.find((q: Quiz) => q.id === quizId);

interface AnswerOption {
  id: number;
  label: string;
  text: string;
  correct: boolean;
};


const numberOfCorrectAnswers = ref(0);
const currentQuestionIndex = ref(0);
const showResult = ref(false);

const onSelectOption = (option: AnswerOption) => {
  if (!quiz) return;
  
  if (option.correct) {
    numberOfCorrectAnswers.value++;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currentQuestionIndex.value++;
}

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz?.questions.length}`;
});
</script>

<template>
  
  <div v-if="quiz">
    <QuizHeader :questionPage="questionPage"/>
    <QuizContent v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onSelectOption"/>
    <QuizResult v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers"/>
  </div>
  <div v-else>
    <p>Quiz tidak ditemukan</p>
  </div>
</template>