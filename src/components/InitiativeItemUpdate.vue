<template>
  <div>
    <button class="btn" @click="incrementInit()">Up</button>
    <button class="btn" @click="decrementInit()">Down</button>
  </div>
</template>

<script lang="ts" setup>
import type { Creature } from '@/types/initiativeTypes';
import { db } from '../firebase';
import { ref as dbRef, update } from 'firebase/database';

const props = defineProps<{
  creature: Creature;
}>();

function incrementInit() {
  const item = dbRef(db, 'initiative/' + props.creature.id);
  update(item, {
    initiative: props.creature.initiative + 1
  });
}

function decrementInit() {
  const item = dbRef(db, 'initiative/' + props.creature.id);
  update(item, {
    initiative: props.creature.initiative - 1
  });
}
</script>
