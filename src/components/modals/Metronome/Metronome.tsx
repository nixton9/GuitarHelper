import { Styled } from '../../../styles/Metronome.styles'
import MetronomePlayer from '@kevinorriss/react-metronome'

const Metronome = () => {
  return (
    <>
      <Styled.MetronomeWrapper>
        <MetronomePlayer maxBpm={300} volume={0.4} />
      </Styled.MetronomeWrapper>
    </>
  )
}

export default Metronome
