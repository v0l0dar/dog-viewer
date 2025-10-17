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
      <p>{{ favorites }}</p>
      <p>{{ dogs }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDogsStore } from '@/stores/dog'

import DogMainImage from '@/components/DogMainImage.vue'

const dogsStore = useDogsStore()
const { mainDog, dogs, favorites } = storeToRefs(dogsStore)
const { fetchDogs, toggleFavorite } = dogsStore

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
</style>
