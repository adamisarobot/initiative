<template>
  <form class="form">
    <div class="form-group">
      <label for="name">Name *</label>
      <input
        type="text"
        id="name"
        class="form-control"
        v-model="name"
        @:keypress="alphaOnly($event)"
        data-lpignore="true"
      />
    </div>
    <div class="form-group">
      <label for="init">Initiative *</label>
      <input type="text" id="init" class="form-control" v-model="init" data-lpignore="true" />
    </div>
    <div class="form-group">
      <label for="hp">Hit Points</label>
      <input type="text" id="hp" class="form-control" v-model="hp" data-lpignore="true" />
    </div>
    <button type="button" class="btn push-left" @click="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['submit']);

const name = ref('');
const init = ref<number>();
const hp = ref<number>();

const alphaOnly = (event: { keyCode: number; preventDefault: () => void }) => {
  const char = String.fromCharCode(event.keyCode);
  if (/^[[a-zA-Z0-9\s]+$/.test(char)) return true;
  else event.preventDefault();
};

const submit = () => {
  if (name.value === '' || init.value === undefined) return;

  emit('submit', { name: name.value, initiative: init.value, hp: hp.value });
  name.value = '';
  init.value = undefined;
  hp.value = undefined;
};
</script>

<style scoped>
.form {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-end;
}

.form .btn {
  padding: 0.5rem 1rem;
}

.form .btn.push-left {
  margin-left: auto;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0;
}

.form-group input {
  max-width: 100px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}
</style>
