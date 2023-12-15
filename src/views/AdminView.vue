<template>
  <main>
    <h1>CRUD!</h1>
    <div class="card">
      <InitiativeForm />
      <InitiativeList />
    </div>
  </main>
</template>

<script setup lang="ts">
import InitiativeForm from '@/components/InitiativeForm.vue';
import InitiativeList from '@/components/InitiativeList.vue';
</script>
