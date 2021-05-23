import React, { useContext } from 'react'
import { SearchVideo } from '../../SearchVideo'
import { Video } from '../../../utils/types'
import { MainContext } from '../../../utils/MainContext'
import { Styled } from '../../../styles/Modal.styles'

interface SearchProps {
  items: Video[]
  query: string
  setQuery: (query: string) => void
  handleSubmit: (e: React.FormEvent) => void
}

export const Search: React.FC<SearchProps> = ({
  items,
  query,
  setQuery,
  handleSubmit
}) => {
  const { videos } = useContext(MainContext)

  return (
    <>
      <Styled.FormFlex onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a video"
        />
        <Styled.Button disabled={!query}>Search</Styled.Button>
      </Styled.FormFlex>

      {Boolean(items.length) && (
        <Styled.SearchList>
          {items.map(item => (
            <SearchVideo
              key={item.id}
              video={item}
              isAdded={videos.some(vid => vid.id === item.id)}
            />
          ))}
        </Styled.SearchList>
      )}
    </>
  )
}
