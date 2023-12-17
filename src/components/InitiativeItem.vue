<template>
  <li :id="pc.id" class="item">
    <aside v-if="isAdmin" class="item__controls item__controls--left">
      <InitiativeItemUpdate :pc="pc" />
    </aside>
    <section class="item__row">
      <div class="item__init">{{ pc.initiative }}</div>
      <div class="item__name">{{ pc.name }}</div>
      <div v-if="isAdmin" class="item__hp">
        <InlineInputNumber :number="pc.hp" label="HP: " @updateNumber="updateNumber" />
      </div>
    </section>
    <aside v-if="isAdmin" class="item__controls item__controls--right">
      <InitiativeItemRemove :pc="pc" />
    </aside>
  </li>
</template>

<script lang="ts" setup>
import { db } from '../firebase';
import { ref as dbRef, update } from 'firebase/database';
import InlineInputNumber from '@/components/InlineInputNumber.vue';
import InitiativeItemUpdate from '@/components/InitiativeItemUpdate.vue';
import InitiativeItemRemove from '@/components/InitiativeItemRemove.vue';

import { useRoles } from '@/composibles/useRoles';
import type { Pc } from '@/types/initiativeTypes';

const props = defineProps<{
  pc: Pc;
}>();

const { isAdmin } = useRoles();
const updateNumber = (newNumber: number) => {
  const item = dbRef(db, 'initiative/' + props.pc.id);
  update(item, {
    hp: newNumber
  });
};
</script>

<style scoped>
.item {
  position: relative;
  display: flex;
}

.item__controls {
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
}

.item__controls--left {
  left: -100px;
}
.item__controls--right {
  right: -100px;
}
.item__row {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
}

.item__init {
  margin-right: 0.5rem;
  outline: 0 solid hotpink;
}

.item__name {
  flex: 1;
  font-weight: bold;
  padding-left: 0.5rem;
  border-left: 1px solid #ccc;
}
.item__hp {
  margin-left: auto;
}
.item__inline {
  max-width: 2.5rem;
  margin-left: 0.25rem;
  padding: 0.5rem 0.25rem 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
}
</style>
