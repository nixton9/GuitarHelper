import React, { useState, useContext } from 'react'
import { AddVideo } from './AddVideo'
import { SingleModalProps } from '../../../utils/types'
import { MainContext } from '../../../utils/MainContext'
import { parseSearchResults } from '../../../utils/helpers'
import { getSingleVideo } from '../../../services/Youtube'

const AddVideoContainer: React.FC<SingleModalProps> = ({
  setIsLoading,
  setError
}) => {
  const { addVideo, setModal } = useContext(MainContext)

  const [inputVal, setInputVal] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputVal) {
      setIsLoading(true)

      getSingleVideo(inputVal)
        ?.then(res => {
          if (res.data.items.length) {
            const video = parseSearchResults(res.data.items)
            addVideo(video[0])
          } else {
            setError('This video was not found')
          }
        })
        .catch(err => setError('There was an error getting the video'))
        .finally(() => {
          setIsLoading(false)
          setModal(null)
        })
    }
  }

  return (
    <AddVideo
      inputVal={inputVal}
      setInputVal={setInputVal}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddVideoContainer
