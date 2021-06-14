import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
`

const Flex = styled.div`
  margin-top: ${({ theme }) => theme.spacingS};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 82vh;
  overflow-y: auto;
`

const Message = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontMedium};
  margin-top: 15rem;

  span {
    color: ${({ theme }) => theme.accent};
  }
`

export const Styled = {
  Container,
  Flex,
  Message
}
