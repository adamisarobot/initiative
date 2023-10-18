<template>
  <form class="form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="form-control" v-model="name" />
    </div>
    <div class="form-group">
      <label for="init">Initiative</label>
      <input type="number" id="init" class="form-control" v-model="init" />
    </div>
    <button type="button" class="btn" @click="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['submit']);

const name = ref('');
const init = ref<number>();
const submit = () => {
  if (name.value === '' || init.value === undefined) return;

  emit('submit', { name: name.value, initiative: init.value });
  name.value = '';
  init.value = undefined;
};
</script>

<style scoped></style>
