<template>
  <main>
    <h1>Fight!</h1>
    <div class="card">
      <InitiativeForm @submit="addToList" />
      <InitiativeList :initiative="initiative" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import InitiativeForm from '@/components/InitiativeForm.vue';
import InitiativeList from '@/components/InitiativeList.vue';

const initiative = reactive<{ name: string; initiative: number; hp: number }[]>([]);
const addToList = (pc: { name: string; initiative: number; hp: number; groupNumber: number }) => {
  if (pc.groupNumber === 1) {
    initiative.push({
      name: pc.name,
      initiative: +pc.initiative,
      hp: +pc.hp
    });
  } else {
    for (let i = 0; i < pc.groupNumber; i++) {
      const newName = `${pc.name} #${i + 1}`;
      initiative.push({
        name: newName,
        initiative: +pc.initiative,
        hp: +pc.hp
      });
    }
  }
  initiative.sort();
};
</script>
