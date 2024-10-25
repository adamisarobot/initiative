<template>
  <main>
    <h1>Fight!</h1>
    <div class="card">
      <InitiativeList />
      <LoopTest />
    </div>
  </main>
</template>

<script setup lang="ts">
import InitiativeList from '@/components/InitiativeList.vue';
import LoopTest from '@/components/LoopTest.vue';
</script>
