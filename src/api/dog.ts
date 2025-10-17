import type { DogImageResponse, DogListResponse } from '@/types/api'
import { axiosApi } from './axios-api-config'

export const dogsApi = {
  getRandomDog(): Promise<DogImageResponse> {
    return axiosApi.get('/breeds/image/random').then((res) => res.data)
  },

  getRandomDogs(count = 10): Promise<DogListResponse> {
    return axiosApi.get(`/breeds/image/random/${count}`).then((res) => res.data)
  },
  // extra for future
  getBreeds(): Promise<{ message: Record<string, string[]>; status: string }> {
    return axiosApi.get('/breeds/list/all').then((res) => res.data)
  },

  getByBreed(breed: string): Promise<DogImageResponse> {
    return axiosApi.get(`/breed/${breed}/images/random`).then((res) => res.data)
  },
}
