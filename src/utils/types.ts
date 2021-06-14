import { Dispatch, SetStateAction } from 'react'

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
  duration?: string
  path?: any
  categoryId?: string
}

export interface SearchResponse {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: SearchItem[]
}

export interface SearchItem {
  etag: string
  kind: string
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    publishedAt: string
    thumbnails: {
      [key: string]: {
        [key: string]: string
      }
    }
  }
  contentDetails: {
    duration: string
  }
}

export interface AppContextProps {
  videos: Video[]
  addVideo: (video: Video) => void
  deleteVideo: (id: string) => void
  editVideo: (video: Video) => void
  categories: Category[]
  addCategory: (category: Category) => void
  deleteCategory: (id: string) => void
  modal: ModalTypes | null
  setModal: Dispatch<SetStateAction<ModalTypes | null>>
  selectedVideo: Video | null
  setSelectedVideo: Dispatch<SetStateAction<Video | null>>
  activeCategory: string
  setActiveCategory: Dispatch<SetStateAction<string>>
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

export interface SingleModalProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<string | null>>
}

export interface Category {
  id: string
  label: string
}

export enum ModalTypes {
  VIDEO = 'VIDEO',
  SEARCH = 'SEARCH',
  ADDVIDEO = 'ADDVIDEO',
  ADDMUSIC = 'ADDMUSIC',
  METRONOME = 'METRONOME',
  CATEGORIES = 'CATEGORIES'
}

export enum VideoPlayerStates {
  NOTINICIATED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}
