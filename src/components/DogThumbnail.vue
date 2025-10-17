<template>
  <div class="thumb" @click="$emit('select', src)">
    <img :src="src" :alt="breed" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; breed: string }>()
defineEmits<{ (e: 'select', src: string): void }>()
</script>

<style lang="scss" scoped>
.thumb {
  height: 100%;
  border-radius: 6px;
  aspect-ratio: 1/1;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
