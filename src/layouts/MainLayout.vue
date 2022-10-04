<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="column items-center">

        <q-toolbar-title>
          Sitcker Manager
        </q-toolbar-title>

        <div>v{{ app_version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs
        v-model="tab"
        class="text-white"
      >
        <q-tab v-for="section, index in sections" :key="index" :name="section" :label="section" />
      </q-tabs>
    </q-footer>

    <q-page-container class="row justify-center">
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
      sections: ["HOME"]
    }
  },

  computed: {
    tab : {
      set(value: string) {
        this.store.setCurrentTab(value)
      },
      get(): string {
        return this.store.getCurrentTab || "HOME"
      }
    },
  },

  created() {
    this.sections = this.store.getSections
  },
});
</script>
