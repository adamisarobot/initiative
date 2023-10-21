<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  databaseURL: import.meta.env.VITE_DATABASE_URL as string,
  projectId: import.meta.env.VITE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_ID as string
};

const fbApp = initializeApp(firebaseConfig);
const db = getDatabase(fbApp);
const settingsRef = ref(db, 'settings');

onMounted(() => {
  console.log('App loaded');
  onValue(
    settingsRef,
    (snapshot) => {
      console.log('snapshot', snapshot);
      snapshot.forEach((childSnapshot) => {
        console.log('childSnapshot.key: ', childSnapshot.key);
        console.log('childSnapshot.val(): ', childSnapshot.val());
      });
    },
    {
      onlyOnce: true
    }
  );
});
</script>

<style scoped></style>
