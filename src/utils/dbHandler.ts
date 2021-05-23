import DB from '../services/DB'
import { Video, Category } from './types'

const DB_NAME = 'AppDatabase'
const DB_VERSION = 2

async function setUpDatabase() {
  await DB.createDB(DB_NAME, DB_VERSION, [
    {
      name: 'videos',
      config: { keyPath: 'id' },
      data: []
    },
    {
      name: 'categories',
      config: { keyPath: 'id' },
      data: []
    }
  ])
}

export async function getVideos() {
  await setUpDatabase()
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const videosStore = await DB.transaction(
    db,
    ['videos'],
    'readwrite'
  ).getStore('videos')

  let videos = await DB.getAllObjectData(videosStore)

  return videos
}

export async function addVideo(video: Video) {
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const videosStore = await DB.transaction(
    db,
    ['videos'],
    'readwrite'
  ).getStore('videos')

  await DB.addObjectData(videosStore, video)
}

export async function removeVideo(id: string) {
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const videosStore = await DB.transaction(
    db,
    ['videos'],
    'readwrite'
  ).getStore('videos')

  await DB.deleteObjectData(videosStore, id)
}

export async function updateVideo(video: Video) {
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const videosStore = await DB.transaction(
    db,
    ['videos'],
    'readwrite'
  ).getStore('videos')

  await DB.updateObjectData(videosStore, 'id', video.id, video)
}

export async function getCategories() {
  await setUpDatabase()
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const categoriesStore = await DB.transaction(
    db,
    ['categories'],
    'readwrite'
  ).getStore('categories')

  let categories = await DB.getAllObjectData(categoriesStore)

  return categories
}

export async function addCategory(category: Category) {
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const categoriesStore = await DB.transaction(
    db,
    ['categories'],
    'readwrite'
  ).getStore('categories')

  await DB.addObjectData(categoriesStore, category)
}

export async function removeCategory(id: string) {
  const db = await DB.openDB(DB_NAME, DB_VERSION)

  const categoriesStore = await DB.transaction(
    db,
    ['categories'],
    'readwrite'
  ).getStore('categories')

  await DB.deleteObjectData(categoriesStore, id)
}
