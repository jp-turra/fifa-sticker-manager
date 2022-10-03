<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="column items-center">

        <q-toolbar-title>
          Sitcker Manager
        </q-toolbar-title>

        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  data() {
      return {
        version: "1.0.0"
      }
    },
});
</script>
