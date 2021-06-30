import styled from 'styled-components/macro'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(15, 15, 15, 0.36);
`

const Container = styled.div`
  position: fixed;
  max-width: 85%;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.surfaces};
  padding: ${({ theme }) => theme.spacingM};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  z-index: 11;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontBold};
`

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacingM};

  &.no-margin {
    margin-top: 0;
  }
`

export const Loading = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Error = styled.div`
  width: 100%;
`

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;

  input,
  textarea,
  button:not(.file-btn) {
    margin-top: ${({ theme }) => theme.spacingS};
  }

  input {
    width: 100%;
  }
`

export const FormFlex = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  width: 85%;
  height: 6rem;
  padding: ${({ theme }) => theme.spacingXXS} ${({ theme }) => theme.spacingS};
  font-size: 1.5rem;
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
`

export const FilePicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  button {
    position: relative;
    min-width: 7.5rem;
    min-height: 3.3rem;
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    border-radius: ${({ theme }) => theme.smallBorderRadius};
    cursor: pointer;

    label {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    svg {
      position: relative;
      top: 0.1rem;
      margin-left: 0.8rem;
    }
  }

  small {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textSecondary};
    font-weight: ${({ theme }) => theme.fontLight};
    margin-left: ${({ theme }) => theme.spacingXS};
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  padding: 2rem ${({ theme }) => theme.spacingS};
  font-size: 1.5rem;
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
`

export const Button = styled.button`
  width: 12.5%;
  height: 6rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.55rem;
  font-weight: ${({ theme }) => theme.fontBold};
  background: ${({ theme }) => theme.accent};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  cursor: pointer;
`

export const VideoDelete = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PlayerWrapper = styled.div`
  position: relative;
`

export const PlayerCountdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontBold};
`

export const MusicImg = styled.img`
  width: ${`${window.innerWidth * 0.4}px`};
  height: ${`${window.innerHeight * 0.28}px`};
  border: 1px solid ${({ theme }) => theme.lightBackground};
  object-fit: contain;
`

export const VideoMeta = styled.div`
  width: 100%;
  padding: 0 0 0 ${({ theme }) => theme.spacingS};
`

export const MetaTitle = styled.h3`
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text};
`

export const MetaDuration = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontLight};
  margin-left: ${({ theme }) => theme.spacingXS};
`

export const MetaDescription = styled.p`
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textSecondary};
  margin-top: ${({ theme }) => theme.spacingXS};
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacingXS};
`

export const Controls = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacingS};

  &.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SingleControl = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  svg {
    font-size: 2.5rem;
    margin-left: ${({ theme }) => theme.spacingXXS};

    &.volume {
      font-size: 2.9rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
`

export const SingleButton = styled.span`
  font-size: 3.5rem;
  margin: 0 ${({ theme }) => theme.spacingXS};
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &.backward {
    font-size: 3.7rem;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`

export const SingleOption = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacingXXS} 0;
`

export const OptionLabel = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`

export const OptionMultiInput = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 3rem;
  }

  span {
    margin-right: 1.5rem;
    font-size: 2rem;
  }
`

export const OptionInput = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.2rem;
  margin-left: 0.8rem;
  cursor: pointer;

  select {
    font-size: 1.2rem;
    background: transparent;
    color: ${({ theme }) => theme.textSecondary};
  }

  input {
    background: transparent;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1.2rem;
    max-width: 5rem;
    overflow: hidden;
  }
`

export const CategorySelect = styled.div`
  margin-top: ${({ theme }) => theme.spacingS};
`

export const Message = styled.p`
  color: ${({ theme }) => theme.text};
`

export const Audio = styled.audio`
  display: none;
`

export const SearchList = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  margin-top: ${({ theme }) => theme.spacingXS};

  .search-video {
    margin-top: ${({ theme }) => theme.spacingM};
    margin-bottom: ${({ theme }) => theme.spacingS};
  }
`

export const CategoriesList = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  margin-top: ${({ theme }) => theme.spacingS};
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 30rem;
  margin: ${({ theme }) => theme.spacingS} auto 0 auto;
  background: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.spacingXS};
  border-radius: ${({ theme }) => theme.smallBorderRadius};

  h4 {
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    color: ${({ theme }) => theme.text};
  }

  span {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const Styled = {
  Overlay,
  Container,
  Title,
  Content,
  Loading,
  Error,
  Form,
  FormFlex,
  Input,
  FilePicker,
  TextArea,
  Button,
  VideoDelete,
  VideoContainer,
  PlayerWrapper,
  PlayerCountdown,
  MusicImg,
  VideoMeta,
  MetaDuration,
  MetaDescription,
  Flex,
  Controls,
  SingleControl,
  Buttons,
  SingleButton,
  MetaTitle,
  SingleOption,
  Options,
  OptionLabel,
  OptionMultiInput,
  OptionInput,
  CategorySelect,
  Message,
  Audio,
  SearchList,
  CategoriesList,
  Category
}
