import { defineStore } from 'pinia';
import { sectionList } from 'src/interface/album.interface';

export const useAppStore = defineStore('app', {
  state: () => ({
    tab: "HOME",
    sections: sectionList
  }),
  getters: {
    getCurrentTab: (state) => state.tab,
    getSections: (state) => state.sections,
  },
  actions: {
    setCurrentTab(newTab: string) {
      this.tab = newTab;
    },
  },
});
