<template>
  <ul class="init-list" v-if="initiative.length">
    <InitiativeItem
      v-for="(creature, index) in liveInitiative"
      :class="{ active: index === 0 }"
      :creature="creature"
      :key="creature.name"
    />
  </ul>
  <footer v-if="isAdmin">
    <button class="btn" @click="clearInitiative">Clear Initiative</button>
    <button class="btn" @click="cycleInitiative">Next Initiative</button>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDatabaseList } from 'vuefire';
import { initiativeRef } from '../firebase';

import InitiativeItem from '@/components/InitiativeItem.vue';
import type { Initiative, Creature } from '@/types/initiativeTypes';
import { remove } from 'firebase/database';
import { useRoles } from '@/composables/useRoles';

const { isAdmin } = useRoles();
const initiative = useDatabaseList(initiativeRef);
const activeIndex = ref(0);

// Need a counter to keep track of the current initiative
// Need to sort the initiative list by initiative value
// Need to have an active state that is the current initiative
// Need to cycle the active state through the initiative list
// Need to have the current initiative displayed at the top of the list, appending the previous one to the bottom of the list
const liveInitiative = computed(() => {
  const tempInit = [...(initiative.value as Initiative)]
    .map((creature: Creature) => {
      return {
        ...creature,
        id: creature.id
      };
    })
    .sort((a: Creature, b: Creature) => b.initiative - a.initiative);

  if (tempInit.length > 0) {
    const firstElement = tempInit.shift();
    if (firstElement) {
      tempInit.push(firstElement);
    }
  }

  return tempInit;
});

const cycleInitiative = () => {
  if (initiative.value && initiative.value.length > 0) {
    const current = initiative.value.splice(activeIndex.value, 1)[0];
    initiative.value.push(current);
    activeIndex.value = 0; // Reset to the first item
  }
};

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
