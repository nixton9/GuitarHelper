import React from 'react'
import { Styled } from '../../../styles/Modal.styles'
import { FaPlus } from 'react-icons/fa'

interface AddMusicProps {
  file: string
  fileName: string
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (title: string) => void
  handleSubmit: (e: React.FormEvent) => void
  audioElRef: React.Ref<HTMLAudioElement>
}

export const AddMusic: React.FC<AddMusicProps> = ({
  file,
  fileName,
  handleFileChange,
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
  audioElRef
}) => {
  return (
    <>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FilePicker>
          <input
            type="file"
            id="music-file"
            accept="audio/*"
            onChange={handleFileChange}
          />
          <button type="button" className="file-btn">
            <label htmlFor="music-file">
              File <FaPlus />
            </label>
          </button>
          <small>{fileName}</small>
        </Styled.FilePicker>

        <Styled.Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Music title"
        />

        <Styled.TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Music Description"
        />

        <Styled.Button disabled={!Boolean(file) || !title}>Add</Styled.Button>
        {file && <Styled.Audio src={file} ref={audioElRef} />}
      </Styled.Form>
    </>
  )
}
