import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Meta = styled.div`
  display: flex;
`

export const Thumbnail = styled.img`
  object-fit: cover;
  width: 20rem;
  height: 12rem;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
`

export const Text = styled.div`
  max-width: 35rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.text};

  h3 {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontBold};
  }

  p {
    font-size: 1.1rem;
    line-height: 2.1rem;
    font-weight: ${({ theme }) => theme.fontLight};
    color: ${({ theme }) => theme.textSecondary};
    margin-top: ${({ theme }) => theme.spacingXS};
  }
`

export const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: ${({ theme }) => theme.spacingXS};
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;

    &.accent {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const Styled = {
  Container,
  Flex,
  Meta,
  Thumbnail,
  Text,
  Add
}
