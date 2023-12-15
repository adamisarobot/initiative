<template>
  <ul class="init-list" v-if="initiative.length">
    <InitiativeItem v-for="pc in sortedInitiativeDesc" :pc="pc" :key="pc.name" />
  </ul>
  <footer v-if="isAdmin">
    <button class="btn" @click="clearInitiative">Clear Initiative</button>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDatabaseList } from 'vuefire';
import { initiativeRef } from '../firebase';

import InitiativeItem from '@/components/InitiativeItem.vue';
import type { Initiative, Pc } from '@/types/initiativeTypes';
import { remove } from 'firebase/database';
import { useRoles } from '@/composibles/useRoles';

const { isAdmin } = useRoles();
const initiative = useDatabaseList(initiativeRef);

const sortedInitiativeDesc = computed(() => {
  // I hate typescript in the front end.
  return [...(initiative.value as unknown as Initiative)]
    .map((pc: Pc) => {
      return {
        ...pc,
        id: pc.id
      };
    })
    .sort((a: Pc, b: Pc) => b.initiative - a.initiative);
});

const clearInitiative = () => {
  remove(initiativeRef);
};
</script>

<style scoped>
.init-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 1rem;
}
</style>
