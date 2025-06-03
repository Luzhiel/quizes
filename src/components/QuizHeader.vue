<script setup lang="ts">
import { defineProps } from 'vue';

const { questionPage } = defineProps(['questionPage'])
</script>

<template>
  <header class="my-10 flex justify-between items-center">
    <h1 class="text-2xl font-semibold">Question {{ questionPage }}</h1>
  </header>
</template>