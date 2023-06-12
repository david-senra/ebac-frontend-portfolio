import styled from 'styled-components'

// Vamos construir um componente estilizado:

type BotaoProps = {
  principal: boolean
  fontSize?: string //indica que é um atributo opcional para indicar na declaração!
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: #fff;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: yellow;
`

const BotaocomoLink = styled(Botao)`
  background-color: yellow;
  color: #000;

  span {
    text-decoration: line-through;
  }
`

function Header() {
  return (
    <header>
      <div>Olá</div>
      <Botao principal>Clique aqui!</Botao>
      <Botao fontSize="14px" principal={false}>
        Enviar
      </Botao>
      <BotaoPerigo font-size="13px" principal={false}>
        Cuidado!
      </BotaoPerigo>
      <BotaocomoLink as="a" principal>
        Botão que se comporta como <span>link</span>
      </BotaocomoLink>
    </header>
  )
}

export default Header
