<script setup lang="ts">
import { useRouter } from 'vue-router';
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import { computed, ref } from 'vue';
// import { watch } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '@/data/quizes.json';

const route = useRoute();
const router = useRouter();
const goToHome = () => {
  router.push({ name: 'home'});
}

const quizId = parseInt(route.params.id as string, 10);
const quiz = quizes.find((q) => q.id === quizId);

interface AnswerOption {
  id: number;
  label: string;
  text: string;
  correct: boolean;
};

const numberOfCorrectAnswers = ref(0);
const currentQuestionIndex = ref(0);

const onSelectOption = (option: AnswerOption) => {
  if (option.correct) {
    numberOfCorrectAnswers.value++;
  }
  currentQuestionIndex.value++;
}

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz?.questions.length}`;
});
</script>

<template>
  <button class="mt-7 text-black font-semibold" @click="goToHome">&#8592; Back</button>
  <div v-if="quiz">
    <QuizHeader :questionPage="questionPage"/>
    <QuizContent :question="quiz.questions[currentQuestionIndex]" @selectOption="onSelectOption"/>

    <div v-if="currentQuestionIndex === quiz.questions.length - 1">
      <button class="bg-sky-200 text-white py-2 px-4 rounded-sm"
      @click="currentQuestionIndex++" :disabled="currentQuestionIndex === quiz.questions.length - 1">Next</button>
    </div>
    <div v-else>
      <button class="bg-sky-900 text-white py-2 px-4 rounded-sm cursor-pointer"
      @click="currentQuestionIndex++">Next</button>
    </div>
  </div>
  <div v-else>
    <p>Quiz tidak ditemukan</p>
  </div>
</template>