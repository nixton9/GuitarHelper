import { useContext } from 'react'
import { SingleVideo } from './SingleVideo'
import { MainContext } from '../utils/MainContext'
import { ModalTypes } from '../utils/types'
import { filterVideoByQuery, filterVideoByCategory } from '../utils/helpers'
import { Styled } from '../styles/VideosMosaic.styles'

export const VideosMosaic = () => {
  const { videos, setModal, activeCategory, query } = useContext(MainContext)

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
