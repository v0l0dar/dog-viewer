import { defineStore } from 'pinia'
import { ref } from 'vue'
import { dogsApi } from '@/api/dog'

export const useDogsStore = defineStore('dogs', () => {
  const mainDog = ref<string>('')
  const dogs = ref<string[]>([])
  const favorites = ref<string[]>([])

  async function fetchDogs() {
    const res = await dogsApi.getRandomDogs()
    if (res.status === 'success') {
      dogs.value = res.message
      if (!mainDog.value && dogs.value[0]) mainDog.value = dogs.value[0]
    }
  }

  function setMainDog(dog: string) {
    mainDog.value = dog
  }

  function toggleFavorite(dog: string) {
    const index = favorites.value.indexOf(dog)
    if (index === -1) favorites.value.push(dog)
    else favorites.value.splice(index, 1)
  }

  return { mainDog, dogs, favorites, fetchDogs, setMainDog, toggleFavorite }
})
