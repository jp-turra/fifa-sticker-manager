<template>
  <q-page class="row items-center justify-evenly" style="max-width: 500px;">
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel v-for="section, index in sections" :key="index" :name="section">
        
        <div v-if="isSection(section, 'HOME')" class="column text-center">
          <div class="text-h4 text-primary">
            Sticker Manager
          </div>

          <div class="text-h6 q-my-lg column q-gutter-y-md">
            Progress: {{ownedStickers}} of {{totalStickers}}
            <q-linear-progress
              rounded
              animation-speed="2000"
              size="10px"
              :value="relativeOwnedSticker"
              color="positive"
              track-color="primary"
              class="q-mt-sm"
            />
            <!-- <q-input rounded v-model="nome" type="text" label="Qual o seu nome?" />
            <q-btn rounded outline color="primary" icon="check" label="Salvar" @click="saveName" /> -->
          </div>

          <div class="text-h6 text-secondary">
            Select a section above to go there
          </div>
        </div>

        <div v-else class="column text-center full-height">
          <div class="text-h4 text-primary">
            Section: {{section}}
          </div>

          <div class="row q-mt-xl q-px-xl justify-center" v-if="section == 'FWC'">
            <div class="col-xs-6 col-sm-4 col-md-3" :class="albumList[`${section} ${index}`] ? '' : 'text-bold'" v-for="index in fwcCount" left-label >
              <q-checkbox color="positive" v-model="albumList[`${section} ${index}`]" :label="`${section} ${index}`" />
            </div>
          </div>

          <div class="row q-mt-xl q-px-xl justify-center" v-else-if="section == 'BELIEVERS'">
            <div class="col-4" :class="albumList[`${section} ${index}`] ? '' : 'text-bold'" v-for="index in believerCount" left-label >
              <q-checkbox color="positive" v-model="albumList[`${section} ${index}`]" :label="`${section} ${index}`" />
            </div>
          </div>

          <div class="row q-mt-xl q-px-xl justify-center" v-else>
            <div class="col-6" :class="albumList[`${section} ${index}`] ? '' : 'text-bold'" v-for="index in teamCount" left-label >
              <q-checkbox color="positive" v-model="albumList[`${section} ${index}`]" :label="`${section} ${index}`" />
            </div>
          </div>
        </div>
        

      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { sectionList, AlbumInterface, HOME_INDEX, BLV_INDEX, FWC_INDEX, believerCount, fwcCount, teamCount } from 'src/interface/album.interface';
import { type } from 'os';
export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      sections: sectionList,
      nome: "",
      normalCount: [] as number[],
      fwcCount: fwcCount,
      believerCount: believerCount,
      teamCount: teamCount,

    }
  },

  created() {
    if (Object.keys(this.albumList).length == 0) this.albumList = this.setupAlbum()
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

    albumList : {
      set(value: AlbumInterface) {
        this.store.setAlbum(value)
      },
      get(): AlbumInterface {
        return this.store.getAlbum || this.setupAlbum()
      }
    },

    totalStickers(): number {
      const album = this.albumList as any
      return typeof album == 'object' ? Object.keys(album).length : 0
    },
    ownedStickers(): number {
      const album = this.albumList as any
      return typeof album == 'object' ? Object.values(album).filter((item) => item).length : 0
    },
    relativeOwnedSticker() {
      const owned = this.ownedStickers as number
      const total = this.totalStickers as number
      return owned/total
    }
  },

  methods: {
    isSection(actual:string, verify: string) {
      return actual === verify
    },
    setupAlbum(): AlbumInterface {
      const album: AlbumInterface = {}
      for (let item in sectionList) {
        const limit = item == FWC_INDEX ? fwcCount : item == BLV_INDEX ? believerCount : teamCount
        const initial = item == FWC_INDEX ? 0 : 1

        for (let index = initial; index <= limit; index++) {
          const card = `${sectionList[item]} ${index}`

          album[card] = false
        }
      }

      return album
    },
    saveName() {

    }
  },
});
</script>
