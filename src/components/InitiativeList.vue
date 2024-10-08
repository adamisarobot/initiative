<template>
  <ul class="init-list" v-if="initiative.length">
    <InitiativeItem
      v-for="(creature, index) in sortedInitiativeDesc"
      :class="{ active: index === 0 }"
      :creature="creature"
      :key="creature.name"
    />
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
import type { Initiative, Creature } from '@/types/initiativeTypes';
import { remove } from 'firebase/database';
import { useRoles } from '@/composibles/useRoles';

const { isAdmin } = useRoles();
const initiative = useDatabaseList(initiativeRef);

const sortedInitiativeDesc = computed(() => {
  return [...(initiative.value as Initiative)]
    .map((creature: Creature) => {
      return {
        ...creature,
        id: creature.id
      };
    })
    .sort((a: Creature, b: Creature) => b.initiative - a.initiative);
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
