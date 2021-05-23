import styled from 'styled-components/macro'

const Container = styled.div`
  margin: ${({ theme }) => theme.spacingS};
  cursor: pointer;
`

const Image = styled.img`
  width: 28rem;
  height: 17rem;
  object-fit: cover;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
`

const Title = styled.h4`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  line-height: 2.9rem;
  font-weight: ${({ theme }) => theme.fontMedium};
  max-width: 27rem;
  margin-top: ${({ theme }) => theme.spacingXS};
  text-align: center;
`

export const Styled = {
  Container,
  Image,
  Title
}
