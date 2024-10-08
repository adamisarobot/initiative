<template>
  <div>
    <button class="btn" @click="removeCharacter">Remove</button>
  </div>
</template>

<script lang="ts" setup>
import type { Creature } from '@/types/initiativeTypes';
import { db } from '../firebase';
import { ref as dbRef, remove } from 'firebase/database';

const props = defineProps<{
  creature: Creature;
}>();

const removeCharacter = () => {
  const item = dbRef(db, 'initiative/' + props.creature.id);
  remove(item);
};
</script>
<style lang="scss" scoped></style>
