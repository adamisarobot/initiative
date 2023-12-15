import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Pc, Initiative } from '@/types/initiativeTypes';

// Decommisioned/ Not in use
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
      const pcIndex = this.initiative.findIndex((pc: Pc) => pc.uuid === pcUuId);
      console.log('Hello', pcIndex);
      if (pcIndex !== -1) {
        // remove the character from the initiative array by index
        this.initiative.splice(pcIndex, 1);
        this.sortInitiativeArray();
      }
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
