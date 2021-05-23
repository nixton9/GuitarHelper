import { useState, useContext } from 'react'
import { SingleVideo } from './SingleVideo'
import { CategoriesNav } from './CategoriesNav'
import { MainContext } from '../utils/MainContext'
import { ModalTypes } from '../utils/types'
import { filterVideoByQuery, filterVideoByCategory } from '../utils/helpers'
import { Styled } from '../styles/VideosMosaic.styles'

export const VideosMosaic = () => {
  const { videos, setModal } = useContext(MainContext)

  const [query, setQuery] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredVideos = filterVideoByCategory(
    filterVideoByQuery(videos, query),
    activeCategory
  )

  return (
    <Styled.Container>
      {!videos.length ? (
        <Styled.Message>
          You don't have any videos here. Start adding them by clicking{' '}
          <span onClick={() => setModal(ModalTypes.ADDVIDEO)}>here</span>
        </Styled.Message>
      ) : (
        <>
          <Styled.FilterBar>
            <Styled.Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search videos"
            />
            <CategoriesNav
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </Styled.FilterBar>
          {!filteredVideos.length ? (
            <Styled.Message>
              There are no videos based on your search criteria.
            </Styled.Message>
          ) : (
            <Styled.Flex>
              {filteredVideos.map(video => (
                <SingleVideo key={video.id} video={video} />
              ))}
            </Styled.Flex>
          )}
        </>
      )}
    </Styled.Container>
  )
}
