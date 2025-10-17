export interface DogImageResponse {
  message: string
  status: 'success' | 'error'
}

export interface DogListResponse {
  message: string[]
  status: 'success' | 'error'
}
