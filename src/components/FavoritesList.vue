<template>
  <aside class="favorites">
    <h3>Favorites</h3>
    <div v-if="favorites.length === 0">No favorites yet</div>
    <ul>
      <li v-for="dog in favorites" :key="dog">
        <img :src="dog" @click="$emit('select', dog)" />
        <button @click="$emit('remove', dog)">✕</button>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ favorites: string[] }>()
defineEmits<{ (e: 'select', src: string): void; (e: 'remove', src: string): void }>()
</script>

<style lang="scss" scoped>
.favorites {
  width: fit-content;
  border-left: 1px solid #ddd;
  padding-left: 12px;

  h3 {
    margin-bottom: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      position: relative;
      display: flex;
      align-items: center;
      width: fit-content;
      gap: 6px;

      img {
        width: 60px;
        height: 60px;

        object-fit: cover;
        cursor: pointer;
        border-radius: 4px;
      }

      button {
        position: absolute;
        top: -0.6rem;
        left: calc(100% - 0.6rem);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.2rem;
        width: 1.2rem;
        background-color: gray;
        border: none;
        font-size: 0.8rem;
        cursor: pointer;
        border-radius: 50%;
      }
    }
  }
}
</style>
