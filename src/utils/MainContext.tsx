import React, { useState, useEffect, createContext } from 'react'
import {
  getVideos,
  addVideo,
  removeVideo,
  updateVideo,
  getCategories,
  addCategory,
  removeCategory
} from './dbHandler'
import { AppContextProps, ModalTypes, Video, Category } from './types'

export const MainContext = createContext({} as AppContextProps)

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<Video[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [modal, setModal] = useState<ModalTypes | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [query, setQuery] = useState<string>('')

  const getAllVideos = () => {
    getVideos()
      .then(res => setVideos(res))
      .catch(err => console.log(err))
  }

  const addNewVideo = (video: Video) => {
    addVideo(video)
      .then(() => getAllVideos())
      .catch(err => console.log(err))
  }

  const deleteVideo = (id: string) => {
    removeVideo(id)
      .then(() => getAllVideos())
      .catch(err => console.log(err))
  }

  const editVideo = (video: Video) => {
    updateVideo(video)
      .then(res => {
        getAllVideos()
        setSelectedVideo(video)
      })
      .catch(err => console.log(err))
  }

  const getAllCategories = () => {
    getCategories()
      .then(res => setCategories(res))
      .catch(err => console.log(err))
  }

  const addNewCategory = (category: Category) => {
    addCategory(category)
      .then(() => getAllCategories())
      .catch(err => console.log(err))
  }

  const deleteCategory = (id: string) => {
    removeCategory(id)
      .then(() => getAllCategories())
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllVideos()
    getAllCategories()
  }, [])

  return (
    <MainContext.Provider
      value={{
        videos,
        addVideo: addNewVideo,
        deleteVideo,
        editVideo,
        categories,
        addCategory: addNewCategory,
        deleteCategory,
        modal,
        setModal,
        selectedVideo,
        setSelectedVideo,
        activeCategory,
        setActiveCategory,
        query,
        setQuery
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
