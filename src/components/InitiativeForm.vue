<template>
  <form class="form">
    <div class="creature">
      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
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
        <label for="init">Initiative <span class="required">*</span></label>
        <input
          type="text"
          id="init"
          class="form-control"
          v-model="init"
          data-lpignore="true"
          @:keypress="numberOnly($event)"
        />
      </div>
      <div class="form-group">
        <label for="hp">Hit Points <span class="required">*</span></label>
        <input
          type="text"
          id="hp"
          class="form-control"
          v-model="hp"
          data-lpignore="true"
          @:keypress="numberOnly($event)"
        />
      </div>
      <div class="form-group">
        <label for="group">Group Create</label>
        <input type="number" id="group" class="form-control" v-model="groupNumber" />
      </div>
    </div>
    <div class="interactive push-left">
      <button type="button" class="btn" @click="submit">Add</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useInitiativeStore } from '@/stores/initiative';

const initiative = useInitiativeStore();

const name = ref('');
const init = ref<number>();
const hp = ref<number>();
const groupNumber = ref<number>(1);

const alphaOnly = (event: { keyCode: number; preventDefault: () => void }) => {
  const char = String.fromCharCode(event.keyCode);
  if (/^[[a-zA-Z0-9\s]+$/.test(char)) return true;
  else event.preventDefault();
};

const numberOnly = (event: { keyCode: number; preventDefault: () => void }) => {
  const char = String.fromCharCode(event.keyCode);
  if (/^[[0-9]+$/.test(char)) return true;
  else event.preventDefault();
};

const submit = () => {
  if (name.value === '' || init.value === undefined || hp.value === undefined) return;
  for (let i = 0; i < groupNumber.value; i++) {
    if (i === 10) break;

    const pcName = groupNumber.value > 1 ? `${name.value} #${i + 1}` : name.value;
    const newPc = {
      uuid: self.crypto.randomUUID(),
      name: pcName,
      initiative: +init.value,
      hp: +hp.value,
      groupNumber: groupNumber.value
    };

    initiative.addCharacterToInitiative(newPc);
  }
  name.value = '';
  init.value = undefined;
  hp.value = undefined;
  groupNumber.value = 1;
};
</script>

<style scoped>
.required {
  color: red;
}
.form {
  display: flex;
  flex-wrap: no-wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
}

.form .btn {
  padding: 0.5rem 1rem;
}

.push-left {
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

.creature {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
