<template>
  <label :class="{ 'sr-only': sronly }" for="hp-inline">{{ label }}</label>
  <input
    ref="inputInline"
    class="item__inline"
    type="text"
    maxlength="3"
    data-lpignore="true"
    :value="props.number"
    @click="$refs.inputInline.select()"
    @keydown.enter="updateNumber"
  />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  number: number;
  label?: string;
  sronly?: boolean;
}>();

const emit = defineEmits(['updateNumber']);

const updateNumber = (event: KeyboardEvent) => {
  const newNumber = parseInt((event.target as HTMLInputElement).value, 10);
  if (!isNaN(newNumber)) {
    emit('updateNumber', newNumber);
  }
  (event.target as HTMLInputElement).blur();
};
</script>

<style scoped>
.item__inline {
  max-width: 2.5rem;
  margin-left: 0.25rem;
  padding: 0.5rem 0.25rem 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-align: right;
}
</style>
