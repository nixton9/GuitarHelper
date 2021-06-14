import styled from 'styled-components/macro'

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Item = styled.li`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.text};
  margin: 0 ${({ theme }) => theme.spacingXXS};
  padding: 0.5rem ${({ theme }) => theme.spacingXXS};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.accent};
  }
`

export const Styled = {
  Nav,
  Item
}
