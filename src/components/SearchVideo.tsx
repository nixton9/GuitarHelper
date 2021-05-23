import React, { useContext } from 'react'
import { Video } from '../utils/types'
import { MainContext } from '../utils/MainContext'
import { Styled } from '../styles/SearchVideo.styles'
import { FaPlus, FaCheck } from 'react-icons/fa'

interface SearchVideoProps {
  video: Video
  isAdded: boolean
}

export const SearchVideo: React.FC<SearchVideoProps> = ({ video, isAdded }) => {
  const { addVideo } = useContext(MainContext)

  return (
    <Styled.Container className="search-video">
      <Styled.Flex>
        <Styled.Meta>
          <Styled.Thumbnail src={video.thumbnail} alt={video.title} />
          <Styled.Text>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </Styled.Text>
        </Styled.Meta>

        <Styled.Add>
          {isAdded ? (
            <span className="accent">
              <FaCheck />
            </span>
          ) : (
            <span onClick={() => addVideo(video)}>
              {' '}
              <FaPlus />
            </span>
          )}
        </Styled.Add>
      </Styled.Flex>
    </Styled.Container>
  )
}
