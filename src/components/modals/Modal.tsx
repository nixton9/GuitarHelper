import { useState, useEffect, useContext } from 'react'
import VideoContainer from './Video/VideoContainer'
import AddVideoContainer from './AddVideo/AddVideoContainer'
import AddMusicContainer from './AddMusic/AddMusicContainer'
import SearchContainer from './Search/SearchContainer'
import CategoriesContainer from './Categories/CategoriesContainer'
import Metronome from './Metronome/Metronome'
import { ModalWrapper } from './ModalWrapper'
import { MainContext } from '../../utils/MainContext'
import { ModalTypes } from '../../utils/types'

const Modal: React.FC = () => {
  const { modal } = useContext(MainContext)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 2500)
    }
  }, [error])

  if (!modal) return null

  let modalTitle
  let modalContent

  switch (modal) {
    case ModalTypes.ADDMUSIC:
      modalTitle = 'Add music from PC'
      modalContent = (
        <AddMusicContainer setIsLoading={setIsLoading} setError={setError} />
      )
      break

    case ModalTypes.ADDVIDEO:
      modalTitle = 'Add Youtube link'
      modalContent = (
        <AddVideoContainer setIsLoading={setIsLoading} setError={setError} />
      )
      break

    case ModalTypes.SEARCH:
      modalTitle = 'Search on Youtube'
      modalContent = (
        <SearchContainer setIsLoading={setIsLoading} setError={setError} />
      )
      break

    case ModalTypes.METRONOME:
      modalTitle = 'Metronome'
      modalContent = <Metronome />
      break

    case ModalTypes.CATEGORIES:
      modalTitle = 'Categories'
      modalContent = (
        <CategoriesContainer setIsLoading={setIsLoading} setError={setError} />
      )
      break

    default:
      modalTitle = ''
      modalContent = (
        <VideoContainer setIsLoading={setIsLoading} setError={setError} />
      )
      break
  }

  return (
    <ModalWrapper title={modalTitle} isLoading={isLoading} error={error}>
      {modalContent}
    </ModalWrapper>
  )
}

export default Modal
