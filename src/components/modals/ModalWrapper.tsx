import { useContext } from 'react'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Styled } from '../../styles/Modal.styles'
import { MainContext } from '../../utils/MainContext'

interface ModalWrapperProps {
  title: string
  children: React.ReactNode
  isLoading: boolean
  error: string | null
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  children,
  isLoading,
  error
}) => {
  const { setModal } = useContext(MainContext)

  return (
    <>
      <Styled.Overlay onClick={() => setModal(null)} />
      <Styled.Container>
        {title && <Styled.Title>{title}</Styled.Title>}

        <Styled.Content className={!title ? 'no-margin' : ''}>
          {children}
          {isLoading ? (
            <Styled.Loading>
              <LoadingSpinner />
            </Styled.Loading>
          ) : (
            error && <Styled.Error>{error}</Styled.Error>
          )}
        </Styled.Content>
      </Styled.Container>
    </>
  )
}
