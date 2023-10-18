<template>
  <ul v-if="initiative.length > 0">
    <li v-for="pc in initiative" :key="pc.name">{{ pc.name }}: {{ pc.initiative }}</li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  initiative: {
    name: string;
    initiative: number;
  }[];
}>();
</script>

<style scoped></style>
