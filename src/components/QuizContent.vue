<script setup lang="ts">
import { defineEmits } from 'vue';
import { defineProps } from 'vue';

interface AnswerOption {
  id: number;
  label: string;
  text: string;
  correct: boolean;
}

interface Question {
  id: number;
  text: string;
  answers: AnswerOption[];
}


// const { question } = defineProps<{
//   question: {
//     id: number;
//     text: string;
//     answers: string[];
//   };
// }>();
const emit = defineEmits<{
  (e: 'selectOption', option: AnswerOption): void;
}>();

const { question } = defineProps<{
  question: Question;
}>();

const emitSelectedOption = (option: AnswerOption) => {
  emit('selectOption', option);
}
</script>

<template>
  <section class="mb-5">
    <h2 class="text-3xl font-semibold">{{ question.text }}</h2>
  </section>
  <section>
    <div v-for="option in question.answers" :key="option.id" @click="emitSelectedOption(option)"  class="flex mb-4 cursor-pointer"> <!-- option -->
      <p class="py-2 px-3 align-center bg-sky-500 font-semibold">{{ option.label }}</p>
      <div class="py-2 px-3 w-full bg-sky-200">{{ option.text }}</div>
    </div>
  </section>
</template>