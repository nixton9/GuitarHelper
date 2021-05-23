import { Styled } from '../../../styles/Modal.styles'

interface AddVideoProps {
  inputVal: string
  setInputVal: (val: string) => void
  handleSubmit: (e: React.FormEvent) => void
}

export const AddVideo: React.FC<AddVideoProps> = ({
  inputVal,
  setInputVal,
  handleSubmit
}) => {
  return (
    <>
      <Styled.FormFlex onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder="Youtube video URL"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <Styled.Button disabled={!Boolean(inputVal)}>Add</Styled.Button>
      </Styled.FormFlex>
    </>
  )
}
