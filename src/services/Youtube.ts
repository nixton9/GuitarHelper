import { youtubeURLParser } from '../utils/helpers'
import axios from 'axios'

const KEY = process.env.REACT_APP_YOUTUBE_KEY

export const getSingleVideo = (url: string) => {
  const videoID = youtubeURLParser(url)

  if (videoID) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet,contentDetails&key=${KEY}`
    return axios.get(url)
  }
}

export const searchVideos = (q: string) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&type=video&key=${KEY}`
  return axios.get(url)
}
