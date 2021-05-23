import { useContext } from 'react'
import { Video } from '../utils/types'
import { MainContext } from '../utils/MainContext'
import { ModalTypes } from '../utils/types'
import { Styled } from '../styles/SingleVideo.styles'

export const SingleVideo: React.FC<{ video: Video }> = ({ video }) => {
  const { setModal, setSelectedVideo } = useContext(MainContext)

  const handleVideoClick = (video: Video) => {
    setModal(ModalTypes.VIDEO)
    setSelectedVideo(video)
  }

  return (
    <Styled.Container onClick={() => handleVideoClick(video)}>
      <Styled.Image src={video.thumbnail} alt={video.title} />
      <Styled.Title>{video.title}</Styled.Title>
    </Styled.Container>
  )
}
