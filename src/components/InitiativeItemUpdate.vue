<template>
  <div>
    <button class="btn" @click="incrementInit()">Up</button>
    <button class="btn" @click="decrementInit()">Down</button>
  </div>
</template>

<script lang="ts" setup>
import { useInitiativeStore } from '@/stores/initiative';
import type { Pc } from '@/store/initiative';

const store = useInitiativeStore();

const props = defineProps<{
  pc: Pc;
}>();

function incrementInit() {
  store.updateCharacterInitiative(props.pc.uuid, props.pc.initiative + 1);
}

function decrementInit() {
  store.updateCharacterInitiative(props.pc.uuid, props.pc.initiative - 1);
}
</script>

<style></style>
