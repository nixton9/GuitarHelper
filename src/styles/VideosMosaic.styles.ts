import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
`

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: ${({ theme }) => theme.spacingXS};
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

const Input = styled.input`
  width: 20rem;
  height: 4rem;
  padding: ${({ theme }) => theme.spacingXXS} ${({ theme }) => theme.spacingXS};
  font-size: 1.3rem;
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
`

const Message = styled.p`
  color: ${({ theme }) => theme.text};
`

export const Styled = {
  Container,
  FilterBar,
  Flex,
  Input,
  Message
}
