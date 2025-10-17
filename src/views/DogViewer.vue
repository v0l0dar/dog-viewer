<template>
  <div class="viewer">
    <div class="viewer__main">
      <DogMainImage
        v-if="mainDog"
        :src="mainDog"
        :breed="getBreed(mainDog)"
        :isFavorite="favorites.includes(mainDog)"
        @toggle-fav="toggleFavorite"
      />
      <div class="viewer__thumbnails">
        <DogThumbnail
          v-for="dog in dogs"
          :key="dog"
          :src="dog"
          :breed="getBreed(dog)"
          @select="setMainDog"
        />
      </div>
    </div>
    <FavoritesList :favorites="favorites" @select="setMainDog" @remove="toggleFavorite" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDogsStore } from '@/stores/dog'

import DogMainImage from '@/components/DogMainImage.vue'
import DogThumbnail from '@/components/DogThumbnail.vue'
import FavoritesList from '@/components/FavoritesList.vue'

const dogsStore = useDogsStore()
const { mainDog, dogs, favorites } = storeToRefs(dogsStore)
const { fetchDogs, toggleFavorite, setMainDog } = dogsStore

function getBreed(url: string) {
  const parts = url.split('/')
  const i = parts.indexOf('breeds') + 1
  return parts[i]?.replace('-', ' ') || 'Unknown'
}

onMounted(fetchDogs)
</script>

<style lang="scss" scoped>
.viewer {
  display: flex;
  padding: 16px;
  gap: 16px;
  min-height: 100dvh;
}
.viewer__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.viewer__thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}
</style>
