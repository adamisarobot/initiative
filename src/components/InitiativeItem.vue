<template>
  <li class="item">
    <div class="item__init">
      <InlineInputNumber :number="pc.initiative" />
    </div>
    <div class="item__name">{{ pc.name }}</div>
    <div class="item__hp" v-if="pc.hp">
      <InlineInputNumber :number="pc.hp" label="HP: " />
    </div>
  </li>
</template>

<script lang="ts" setup>
import InlineInputNumber from '@/components/InlineInputNumber.vue';
defineProps<{
  pc: {
    name: string;
    initiative: number;
    hp: number;
  };
}>();
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
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
