import { Video, SearchItem } from './types'

export const parseSearchResults = (items: SearchItem[]): Video[] =>
  items.map(item => ({
    id:
      typeof item.id === 'object' && item.id !== null
        ? item.id.videoId
        : item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url,
    date: item.snippet.publishedAt,
    duration: item.contentDetails ? item.contentDetails.duration : ''
  }))

export const youtubeURLParser = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

export const secondsToTime = (secs: number) => {
  const seconds = Math.round(secs)
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds / 60) % 60
  const parsedSeconds = (seconds % 60).toFixed(2)

  return [hours, minutes, parsedSeconds]
    .map(v => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':')
    .slice(0, 5)
}

export const parseMusicTitle = (title: string) =>
  title.replace(/.mp3|.wav/g, '')

export const filterVideoByQuery = (videos: Video[], query: string) =>
  videos.length
    ? videos.filter(
        vid =>
          vid.title.toLowerCase().includes(query.toLowerCase()) ||
          vid.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

export const filterVideoByCategory = (videos: Video[], category: string) =>
  videos.length
    ? videos.filter(vid => category === 'all' || vid.categoryId === category)
    : []

export const capitalize = (name: string) =>
  name ? name.replace(/(^|\s)\S/g, l => l.toUpperCase()) : ''
