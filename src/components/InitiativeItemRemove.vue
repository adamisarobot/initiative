<template>
  <div>
    <button class="btn" @click="removeCharacter">Remove</button>
  </div>
</template>

<script lang="ts" setup>
import { useInitiativeStore } from '@/stores/initiative';
import type { Pc } from '@/types/initiativeTypes';

const store = useInitiativeStore();

const props = defineProps<{
  pc: Pc;
}>();

const removeCharacter = () => {
  store.removeCharacterFromInitiative(props.pc.uuid);
};
</script>

<style lang="scss" scoped></style>
