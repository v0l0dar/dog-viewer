<template>
  <div>
    <p>{{ favorites }}</p>
    <p>{{ mainDog }}</p>
    <p>{{ dogs }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDogsStore } from '@/stores/dog'
const dogsStore = useDogsStore()
const { mainDog, dogs, favorites } = storeToRefs(dogsStore)
const { fetchDogs } = dogsStore

onMounted(fetchDogs)
</script>

<style scoped lang="scss"></style>
