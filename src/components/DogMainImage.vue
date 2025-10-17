<template>
  <div class="dog-main">
    <div class="dog-main__wrapper">
      <img v-if="src" :src="src" :alt="breed" class="dog-main__img" />
      <button class="dog-main__fav" @click="$emit('toggle-fav', src)">
        {{ isFavorite ? '★' : '☆' }}
      </button>
    </div>
    <p class="dog-main__breed">{{ breed }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  breed: string
  isFavorite: boolean
}>()

defineEmits<{
  (e: 'toggle-fav', src: string): void
}>()
</script>

<style lang="scss" scoped>
.dog-main {
  position: relative;
  text-align: center;
}
.dog-main__wrapper {
  position: relative;
  max-width: 300px;
}
.dog-main__img {
  height: 100%;
  width: 100%;

  border-radius: 10px;
  border: 1px solid black;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.dog-main__breed {
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: 600;
}
.dog-main__fav {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: turquoise;
  border: none;
  border-radius: 50%;
  color: gold;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}
</style>
