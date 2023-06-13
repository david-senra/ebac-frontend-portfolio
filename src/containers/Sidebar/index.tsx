import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>David Senra</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        david-senra
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
