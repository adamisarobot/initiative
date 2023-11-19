<template>
  <ul class="init-list" v-if="initiative.length">
    <InitiativeItem v-for="pc in initiative" :pc="pc" :key="pc.name" />
  </ul>
</template>

<script setup lang="ts">
import InitiativeItem from '@/components/InitiativeItem.vue';
import { useInitiativeStore } from '@/stores/initiative';

const { initiative } = useInitiativeStore();
</script>

<style scoped>
.init-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 1rem;
}
</style>
