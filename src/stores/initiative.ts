import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useInitiativeStore = defineStore('initiative', () => {
  const initiative = reactive<{ uuid: string; name: string; initiative: number; hp: number }[]>([]);

  function addToList(pc: { name: string; initiative: number; hp: number; groupNumber: number }) {
    for (let i = 0; i < pc.groupNumber; i++) {
      if (i === 10) break;
      const uuid = self.crypto.randomUUID();
      const name = pc.groupNumber > 1 ? `${pc.name} #${i + 1}` : pc.name;
      initiative.push({
        uuid,
        name,
        initiative: +pc.initiative,
        hp: +pc.hp
      });
    }
    initiative.sort((a, b) => b.initiative - a.initiative);
  }

  function updateList(pc: { uuid: string; name: string; initiative: number; hp: number }) {
    console.log(pc);
    const index = initiative.findIndex((item) => item.uuid === pc.uuid);
    initiative[index] = pc;
    initiative.sort((a, b) => b.initiative - a.initiative);
  }

  return { initiative, addToList, updateList };
});
