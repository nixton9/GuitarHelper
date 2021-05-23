import React, { useState } from 'react'
import { Search } from './Search'
import { searchVideos } from '../../../services/Youtube'
import { SingleModalProps, Video } from '../../../utils/types'
import { parseSearchResults } from '../../../utils/helpers'

const SearchContainer: React.FC<SingleModalProps> = ({
  setIsLoading,
  setError
}) => {
  const [items, setItems] = useState<Video[]>([])
  const [query, setQuery] = useState<string>('')

  const fetchSearchResults = (q: string) => {
    setIsLoading(true)
    searchVideos(q)
      .then(res => setItems(parseSearchResults(res.data.items)))
      .catch(err => setError('There was a problem searching for videos.'))
      .finally(() => setIsLoading(false))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchSearchResults(query)
  }

  return (
    <Search
      items={items}
      query={query}
      setQuery={setQuery}
      handleSubmit={handleSubmit}
    />
  )
}

export default SearchContainer
