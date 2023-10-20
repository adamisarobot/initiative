<template>
  <draggable v-model="sortedInit" tag="ul" class="init-list" v-if="sortedInit.length > 0">
    <template #item="{ element: pc }">
      <InitiativeItem :pc="pc" />
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import draggable from 'vuedraggable';
import InitiativeItem from '@/components/InitiativeItem.vue';

const props = defineProps<{
  initiative: {
    name: string;
    initiative: number;
    hp?: number;
  }[];
}>();

// This method will create a new initiative list sorted from highest to lowest
const sortedInit = computed(() => {
  return [...props.initiative].sort((a, b) => b.initiative - a.initiative);
});
</script>

<style scoped>
.init-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 1rem;
}
</style>
