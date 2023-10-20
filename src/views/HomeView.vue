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

const initiative = reactive<{ name: string; initiative: number; hp?: number }[]>([]);
const addToList = (pc: { name: string; initiative: number; hp?: number }) => {
  initiative.sort().push(pc);
};
</script>
