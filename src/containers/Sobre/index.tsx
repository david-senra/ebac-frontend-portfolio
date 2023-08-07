import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quam
      cupiditate reprehenderit recusandae dolore vitae blanditiis voluptate
      adipisci inventore, autem veniam nobis in, facere qui tenetur sunt ab
      dicta velit?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=david-senra&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=david-senra&layout=compact&langs_count=9&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
