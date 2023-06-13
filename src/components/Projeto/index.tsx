import styled from 'styled-components'

import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Botao } from './styles'

//Dá pra colocar o componente aqui mesmo, o arquivo "styles" é opcional.

const Card = styled.div`
  border: solid 1px #c1c1c1;
  padding: 16px;
`

const Projeto = () => (
  <Card>
    <Titulo>Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas com filtro utilizando o framework VueJS
    </Paragrafo>
    <Botao>Visualizar</Botao>
  </Card>
)

export default Projeto
