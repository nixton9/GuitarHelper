import styled from 'styled-components/macro'

export const MetronomeWrapper = styled.div`
  position: relative;

  .metronome {
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacingL};
  }

  .metronome__top {
    display: block;
  }

  .metronome__bpm {
    justify-content: center;
    flex-direction: column;

    h1,
    small {
      font-family: ${({ theme }) => theme.fontFamily};
      font-weight: ${({ theme }) => theme.fontBold};
    }

    h1 {
      font-size: 5rem;
    }

    small {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.lightBackground};
    }
  }

  .metronome__slider {
    width: 90%;
    margin: ${({ theme }) => theme.spacingS} auto 0 auto;

    .rc-slider-rail {
      height: 12px;
      background-color: ${({ theme }) => theme.text};
    }

    .rc-slider-track {
      height: 12px;
      background-color: ${({ theme }) => theme.lightAccent};
    }

    .rc-slider-handle {
      width: 22px;
      height: 22px;
      background-color: ${({ theme }) => theme.accent};
      border: none;
    }
  }

  .metronome__play-pause {
    position: absolute;
    bottom: -9.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.accent};

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .slider__button {
    position: relative;
    top: 0.2rem;
    background: transparent;
    font-size: 3rem;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0 ${({ theme }) => theme.spacingS};

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const Styled = {
  MetronomeWrapper
}
