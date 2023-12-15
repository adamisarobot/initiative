<template>
  <div>
    <button class="btn" @click="incrementInit()">Up</button>
    <button class="btn" @click="decrementInit()">Down</button>
  </div>
</template>

<script lang="ts" setup>
import type { Pc } from '@/types/initiativeTypes';
import { db } from '../firebase';
import { ref as dbRef, update } from 'firebase/database';

const props = defineProps<{
  pc: Pc;
}>();

function incrementInit() {
  const item = dbRef(db, 'initiative/' + props.pc.id);
  update(item, {
    initiative: props.pc.initiative + 1
  });
}

function decrementInit() {
  const item = dbRef(db, 'initiative/' + props.pc.id);
  update(item, {
    initiative: props.pc.initiative - 1
  });
}
</script>
