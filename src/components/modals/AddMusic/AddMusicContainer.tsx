import React, { useState, useContext, useEffect, useRef } from 'react'
import { AddMusic } from './AddMusic'
import { MainContext } from '../../../utils/MainContext'
import { SingleModalProps } from '../../../utils/types'
import { secondsToTime, parseMusicTitle } from '../../../utils/helpers'

const AddMusicContainer: React.FC<SingleModalProps> = ({
  setIsLoading,
  setError
}) => {
  const { addVideo, setModal } = useContext(MainContext)

  const [file, setFile] = useState<any>('')
  const [fileName, setFileName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [duration, setDuration] = useState<string>('')

  const audioElRef = useRef<HTMLAudioElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (file) {
      setIsLoading(true)

      const music = {
        id: `${title}-${new Date().toISOString()}`,
        title,
        description,
        thumbnail:
          'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/w_auto/v1621499880/website/music-default_ugmygh.png',
        date: new Date().toISOString(),
        duration: duration,
        path: file
      }

      addVideo(music)
      setIsLoading(false)
      setModal(null)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && e.target.files.length) {
      const reader = new FileReader()
      reader.onload = function (event: ProgressEvent<FileReader>) {
        event.target && setFile(event.target.result)
        e.target.files && setTitle(parseMusicTitle(e.target.files[0].name))
        e.target.files && setFileName(e.target.files[0].name)
      }
      reader.readAsDataURL(e.target.files[0])
    } else {
      setError("Couldn't get this file.")
    }
  }

  const setMusicDuration = () =>
    setDuration(secondsToTime(audioElRef?.current?.duration || 0))

  useEffect(() => {
    const audioEl = audioElRef?.current
    audioEl?.addEventListener('loadedmetadata', setMusicDuration)
    return () =>
      audioEl?.removeEventListener('loadedmetadata', setMusicDuration)
  }, [file])

  return (
    <AddMusic
      file={file}
      fileName={fileName}
      handleFileChange={handleFileChange}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      handleSubmit={handleSubmit}
      audioElRef={audioElRef}
    />
  )
}

export default AddMusicContainer
