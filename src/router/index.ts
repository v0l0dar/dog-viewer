import { createRouter, createWebHistory } from 'vue-router'
import DogViewer from '@/views/DogViewer.vue'

const routes = [{ path: '/', name: 'home', component: DogViewer }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
