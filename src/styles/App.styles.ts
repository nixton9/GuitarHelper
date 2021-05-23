import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacingL} ${theme.spacingS} ${theme.spacingS}`};
`

export const Styled = {
  Container
}
