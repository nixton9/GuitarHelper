import React, { useState, useRef, useEffect, useContext } from 'react'
import { Video } from './Video'
import { SingleModalProps, VideoPlayerStates } from '../../../utils/types'
import { MainContext } from '../../../utils/MainContext'
import { convertToSeconds } from '../../../utils/helpers'
import { Options } from 'react-youtube'

const VideoContainer: React.FC<SingleModalProps> = ({
  setIsLoading,
  setError
}) => {
  const [playerState, setPlayerState] = useState<VideoPlayerStates>(-1)
  const [loop, setLoop] = useState<boolean>(false)
  const [timer, setTimer] = useState<boolean>(false)
  const [speed, setSpeed] = useState<number>(1)
  const [volume, setVolume] = useState<number>(50)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<string>('')

  const { selectedVideo } = useContext(MainContext)
  const isMusic = Boolean(selectedVideo?.path)

  const videoEvent = useRef<any>(null)
  const audioEl = useRef<HTMLAudioElement>(null)

  const playerOptions: Options = {
    height: (window.innerHeight * 0.28).toString(),
    width: (window.innerWidth * 0.4).toString()
  }

  const onPlayerReady = (event: Event) => (videoEvent.current = event.target)
  const onPlayerChange = (event: any) => setPlayerState(event.data)

  const play = () => {
    if (isMusic) {
      if (timer && audioEl?.current?.currentTime === 0) {
        playWithTimer()
      } else {
        if (startTime && audioEl && audioEl.current) {
          audioEl.current.currentTime = Number(convertToSeconds(startTime))
        }
        audioEl?.current?.play()
      }
    } else {
      if (
        timer &&
        (playerState === VideoPlayerStates.NOTINICIATED ||
          playerState === VideoPlayerStates.ENDED)
      ) {
        playWithTimer()
      } else {
        if (startTime) {
          videoEvent?.current?.seekTo(convertToSeconds(startTime))
        }
        videoEvent?.current?.playVideo()
      }
    }
  }

  const playFromStart = () => {
    if (isMusic) {
      if (audioEl && audioEl.current) {
        audioEl.current.pause()
        audioEl.current.currentTime = 0
        if (timer) {
          playWithTimer()
        } else {
          audioEl.current.play()
        }
      }
    } else {
      videoEvent?.current?.stopVideo()
      if (timer) {
        playWithTimer()
      } else {
        videoEvent?.current?.playVideo()
      }
    }
  }

  const pause = () => {
    if (isMusic) {
      audioEl?.current?.pause()
    } else {
      videoEvent?.current?.pauseVideo()
    }
  }

  const playWithTimer = () => {
    let timeLeft = 5
    const countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown)
        if (isMusic) {
          audioEl?.current?.play()
        } else {
          videoEvent?.current?.playVideo()
        }
        setCountdown(null)
      } else {
        timeLeft -= 1
        setCountdown(timeLeft)
      }
    }, 1000)
  }

  const changeLoop = () => setLoop(!loop)

  const changeTimer = () => setTimer(!timer)

  const changeStartTime = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStartTime(e.target.value)

  const changeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value))
    if (isMusic) {
      if (audioEl && audioEl.current) {
        audioEl.current.playbackRate = Number(e.target.value)
      }
    } else {
      videoEvent?.current?.setPlaybackRate(Number(e.target.value))
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
    if (isMusic) {
      if (audioEl && audioEl.current) {
        audioEl.current.volume = Number(e.target.value)
      }
    } else {
      videoEvent?.current?.setVolume(Number(e.target.value))
    }
  }

  useEffect(() => {
    if (playerState === VideoPlayerStates.ENDED && loop) {
      videoEvent?.current?.playVideo()
    }
  }, [playerState, loop])

  return (
    <Video
      speed={speed}
      volume={volume}
      countdown={countdown}
      loop={loop}
      timer={timer}
      startTime={startTime}
      playerOptions={playerOptions}
      onPlayerReady={onPlayerReady}
      onPlayerChange={onPlayerChange}
      playFromStart={playFromStart}
      play={play}
      pause={pause}
      changeLoop={changeLoop}
      changeTimer={changeTimer}
      changeSpeed={changeSpeed}
      changeVolume={changeVolume}
      changeStartTime={changeStartTime}
      audioEl={audioEl}
      isMusic={isMusic}
    />
  )
}

export default VideoContainer
