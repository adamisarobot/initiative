import { ref } from 'vue';
import { useDatabaseList } from 'vuefire';
import { initiativeRef } from '../firebase';
import type { Initiative, Creature } from '@/types/initiativeTypes';

// Add all the Firebase crud operations here (migrate from the components)
// Need a system to create the initiative loop. So that active creature is always the first in the initiative array but it maintains the order of the creature list.

export const useInitiative = () => {
  const initiative = useDatabaseList(initiativeRef);

  const getInitiative = () => {
    return initiative.value;
  };

  return {
    initiative,
    getInitiative
  };
};
