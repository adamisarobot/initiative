<template>
  <div>Stuff</div>
  <div v-for="item in initiative" :key="item.id">
    <div>{{ item.name }}</div>
    <div>{{ item.initiative }}</div>
  </div>
</template>

<script setup lang="ts">
import { useInitiative } from '@/composables/useInitiative';

const { getInitiative } = useInitiative();
const initiative = getInitiative();

console.log(initiative);
</script>

<style scoped></style>
