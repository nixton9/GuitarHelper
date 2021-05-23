import Modal from './components/modals/Modal'
import { TopBar } from './components/TopBar'
import { VideosMosaic } from './components/VideosMosaic'
import { theme } from './styles/theme'
import { Styled } from './styles/App.styles'
import { GlobalStyle } from './styles/globalstyles'
import { MainProvider } from './utils/MainContext'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainProvider>
        <Styled.Container>
          <TopBar />
          <Modal />
          <VideosMosaic />
        </Styled.Container>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
