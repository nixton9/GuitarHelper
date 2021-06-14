import styled from 'styled-components/macro'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingS};
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

const Items = styled.div`
  display: flex;
  align-items: center;
`

const Item = styled.div`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  padding: ${({ theme }) => theme.spacingXS};
  margin-left: 0.2rem;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};

    .dropdown {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &.categories {
    font-size: 2.4rem;
  }
`

const DropDown = styled.ul`
  position: absolute;
  right: 0;
  top: 3rem;
  padding: ${({ theme }) => theme.spacingXS} 0;
  background: ${({ theme }) => theme.surfaces};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  transition: all 0.15s ease;

  &:hover {
    transform: scaleY(1);
    opacity: 1;
  }
`

const DropDownItem = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontMedium};
  padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingS};
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.lightBackground};
  }
`

export const Styled = {
  Container,
  Input,
  Items,
  Item,
  DropDown,
  DropDownItem
}
