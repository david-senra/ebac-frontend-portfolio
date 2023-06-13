import styled from 'styled-components'

export const Botao = styled.a`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  padding: 8px;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corHoverBotao};
  }
`
