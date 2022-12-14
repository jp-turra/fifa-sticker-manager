import { defineStore } from 'pinia';
import { AlbumInterface, sectionList } from 'src/interface/album.interface';

export const useAppStore = defineStore('app', {
  state: () => ({
    tab: "HOME",
    sections: sectionList,
    album: {} as AlbumInterface,
    blockOwnedStickers: false
  }),
  getters: {
    getCurrentTab: (state) => state.tab,
    getSections: (state) => state.sections,
    getAlbum: (state) => state.album,
    getBlockOwnedStickers: (state) => state.blockOwnedStickers
  },
  actions: {
    setCurrentTab(newTab: string) {
      this.tab = newTab;
    },
    setAlbum(album: AlbumInterface) {
      this.album = album
    },
    setBlockOwnedStickers(value: boolean = true) {
      this.blockOwnedStickers = value
    }
  },
});
