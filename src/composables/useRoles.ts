import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useRoles() {
  const route = useRoute();

  const isAdmin = computed(() => {
    return route.path === '/adam4ever';
  });

  return {
    isAdmin
  };
}
