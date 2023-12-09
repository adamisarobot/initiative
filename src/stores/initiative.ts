import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Pc, Initiative } from '@/types/initiativeTypes';

export const useInitiativeStore = defineStore('initiative', {
  state: () => ({
    initiative: [] as Initiative
  }),

  actions: {
    addCharacterToInitiative(pc: Pc) {
      this.initiative.push(pc);
      this.sortInitiativeArray();
    },

    updateCharacterInitiative(pcUuId: string, newInitiative: number) {
      const pcIndex = this.initiative.findIndex((pc: Pc) => pc.uuid === pcUuId);

      if (pcIndex !== -1) {
        this.initiative[pcIndex].initiative = newInitiative;
        this.sortInitiativeArray();
      }
    },

    removeCharacterFromInitiative(pcUuId: string) {
      this.initiative = this.initiative.filter((pc: Pc) => pc.uuid !== pcUuId);
    },

    sortInitiativeArray() {
      this.initiative.sort((a, b) => b.initiative - a.initiative);
    },

    clearInitiative() {
      this.initiative = [];
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInitiativeStore, import.meta.hot));
}
