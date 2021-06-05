import React, { useContext } from 'react'
import { RangeInput } from '../../RangeInput'
import { MainContext } from '../../../utils/MainContext'
import { Styled } from '../../../styles/Modal.styles'
import YouTubePlayer, { Options } from 'react-youtube'
import {
  FaTrash,
  FaStopwatch,
  FaHistory,
  FaFilter,
  FaPlay,
  FaPause,
  FaBackward,
  FaVolumeUp,
  FaClock
} from 'react-icons/fa'

interface VideoProps {
  speed: number
  volume: number
  countdown: number | null
  loop: boolean
  timer: boolean
  startTime: string
  playerOptions: Options
  onPlayerReady: (e: any) => void
  onPlayerChange: (e: any) => void
  playFromStart: () => void
  play: () => void
  pause: () => void
  changeLoop: () => void
  changeTimer: () => void
  changeSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeStartTime: (e: React.ChangeEvent<HTMLInputElement>) => void
  audioEl: React.Ref<HTMLAudioElement>
  isMusic: boolean
}

export const Video: React.FC<VideoProps> = ({
  speed,
  volume,
  countdown,
  loop,
  timer,
  startTime,
  playerOptions,
  onPlayerReady,
  onPlayerChange,
  playFromStart,
  play,
  pause,
  changeLoop,
  changeTimer,
  changeSpeed,
  changeVolume,
  changeStartTime,
  audioEl,
  isMusic
}) => {
  const { selectedVideo, setModal, deleteVideo, categories, editVideo } =
    useContext(MainContext)

  const deleteVid = (id: string) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      deleteVideo(id)
      setModal(null)
    }
  }

  return selectedVideo ? (
    <>
      <Styled.VideoDelete onClick={() => deleteVid(selectedVideo.id)}>
        <FaTrash />
      </Styled.VideoDelete>

      <Styled.VideoContainer>
        <Styled.PlayerWrapper>
          {Boolean(countdown) && (
            <Styled.PlayerCountdown>{countdown}</Styled.PlayerCountdown>
          )}
          {isMusic ? (
            <>
              <audio ref={audioEl} loop={loop}>
                <source src={selectedVideo.path} />
                Your browser does not support audio. Try updating it or using a
                different one
              </audio>
              <Styled.MusicImg
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
              />
            </>
          ) : (
            <YouTubePlayer
              videoId={selectedVideo.id}
              opts={playerOptions}
              onReady={onPlayerReady}
              onStateChange={onPlayerChange}
            />
          )}
        </Styled.PlayerWrapper>

        <Styled.VideoMeta>
          <Styled.MetaTitle>
            {selectedVideo.title}
            {selectedVideo.duration && (
              <Styled.MetaDuration>
                {selectedVideo.duration}
              </Styled.MetaDuration>
            )}
          </Styled.MetaTitle>

          <Styled.MetaDescription>
            {selectedVideo.description.substr(0, 350)}
          </Styled.MetaDescription>

          <Styled.Controls>
            <Styled.Options>
              <Styled.SingleOption>
                <Styled.OptionLabel>
                  <FaHistory />
                </Styled.OptionLabel>
                <Styled.OptionInput>
                  <span onClick={changeLoop}>{loop ? 'On' : 'Off'}</span>
                </Styled.OptionInput>
              </Styled.SingleOption>

              <Styled.SingleOption>
                <Styled.OptionLabel>
                  <FaStopwatch />
                </Styled.OptionLabel>
                <Styled.OptionInput>
                  <span onClick={changeTimer}>{timer ? 'On' : 'Off'}</span>
                </Styled.OptionInput>
              </Styled.SingleOption>

              <Styled.SingleOption>
                <Styled.OptionLabel>
                  <FaClock />
                </Styled.OptionLabel>
                <Styled.OptionInput>
                  <input
                    type="number"
                    step="0.01"
                    value={startTime}
                    onChange={changeStartTime}
                    placeholder="0"
                  />
                </Styled.OptionInput>
              </Styled.SingleOption>

              {Boolean(categories.length) && (
                <Styled.SingleOption>
                  <Styled.OptionLabel>
                    <FaFilter />
                  </Styled.OptionLabel>
                  <Styled.OptionInput>
                    <select
                      value={selectedVideo.categoryId}
                      onChange={e =>
                        editVideo({
                          ...selectedVideo,
                          categoryId: e.target.value
                        })
                      }
                    >
                      <option value="">None</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </Styled.OptionInput>
                </Styled.SingleOption>
              )}
            </Styled.Options>

            <Styled.Buttons>
              <Styled.SingleButton onClick={playFromStart} className="backward">
                <FaBackward />
              </Styled.SingleButton>
              <Styled.SingleButton onClick={play}>
                <FaPlay />
              </Styled.SingleButton>
              <Styled.SingleButton onClick={pause}>
                <FaPause />
              </Styled.SingleButton>
            </Styled.Buttons>
          </Styled.Controls>

          <Styled.Controls className="flex">
            <Styled.SingleControl>
              <RangeInput
                value={speed}
                min="0.25"
                max="1"
                step="0.25"
                onChange={changeSpeed}
              />
              <FaClock />
            </Styled.SingleControl>

            <Styled.SingleControl>
              <RangeInput
                value={volume}
                min="0"
                max={isMusic ? '1' : '100'}
                step={isMusic ? '0.1' : '1'}
                onChange={changeVolume}
              />
              <FaVolumeUp className="volume" />
            </Styled.SingleControl>
          </Styled.Controls>
        </Styled.VideoMeta>
      </Styled.VideoContainer>
    </>
  ) : (
    <Styled.Message>There was a problem, video was not found.</Styled.Message>
  )
}
