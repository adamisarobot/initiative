<template>
  <main>
    <h1 class="callout marker-400">Fight!</h1>
    <div class="card">
      <InitiativeList />
    </div>
  </main>
</template>

<script setup lang="ts">
import InitiativeList from '@/components/InitiativeList.vue';
</script>

<style scoped>
.callout {
  color: rgb(171, 25, 25);
  text-shadow: 1px 1px #000;
}
</style>
