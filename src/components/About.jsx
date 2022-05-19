import me from '../assets/about.jpg'
import { MdDoubleArrow } from 'react-icons/md'

const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center overflow-hidden w-full gap-10 py-16 max-w-screen-2xl'>

      <img className="rounded-lg shadow-lg sm:w-10/12 max-w-xl" src={me} alt="" />

      <div className="max-w-2xl mx-10 lg:mx-0 flex flex-col items-center">
        <h2 className="font-main text-center text-3xl font-medium tracking-wider text-rosebrown-300 ">Olá querida alma, seja bem-vinda!</h2>
        <p className="mt-6 font-main text-2xl font-light tracking-wider text-rosebrown-500">Eu sou/estou Bruna, tenho 26 anos, sou natural de Recife-PE e moro nos Estados Unidos há 4 anos.<br />
          Eu estou terapeuta holística, graduada nos cursos de Terapia Multidimensional, Leitura do Plano de Alma (Soul Plan®) e Intuitive Healing.<br />
          Desde muito nova sempre tive interesse pelo mundo holístico e tudo que envolve autoconhecimento, expansão de consciência e espiritualidade.<br />
          Sempre fui uma grande questionadora e buscadora de conexões e informações à nível mais profundo, à nível de alma.</p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider text-rosebrown-500"> A busca por respostas à perguntas como: “O que estou fazendo aqui?” “De onde venho?” “Quem realmente Sou?” “Qual o meu propósito nessa existência?” se intensificou quando passei por vários processos desafiadores que me despertaram para minha natureza espiritual e me impulsionaram a ver a vida e compreender meus processos por uma outra perspectiva, de uma forma mais amorosa e verdadeira.<br />
        </p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider text-rosebrown-500">
          Comecei desde então, há mais ou menos 6 anos atrás, uma grande jornanda de autoconhecimento e desenvolvimento pessoal, em busca de respostas aos meus questionamentos mais profundos e em busca da minha verdade, aquela que ressoa no meu coração, e posso falar que essa jornada é eterna e acredito que é aí que há beleza, é entender que sempre tem algo a mais que podemos aprender sobre nós mesmos, sobre o outro e o universo de forma geral, e que essa busca e jornada pode ser sim, leve, amorosa e libertadora.</p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider text-rosebrown-500">Tem uma frase na qual eu me conecto muito que diz o seguinte: “Você pode ser substituível naquilo que você faz, mas nunca naquilo que você É”. <br />
          E a minha missão é te ajudar a relembrar quem você verdadeiramente É. Quem você é além dos seus medos, erros, anseios, qualidades, defeitos, escolhas, profisssão, status social...<br />
          Quem você é à nível profundo, à nível de Alma.
          Espero fazer parte da sua jornada de volta para casa, de volta para sua essência.</p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider text-rosebrown-500">
          Com amor,
          Bruna.
        </p>
        <div className='w-full mt-4 flex items-center h-10 justify-center gap-3'>
          <span className="block h-px w-2/5 bg-rosebrown-300"></span>
          <MdDoubleArrow className='text-3xl text-rosebrown-300 rotate-90' />
          <span className="block h-px w-2/5 bg-rosebrown-300"></span>
        </div>
        <p className="mt-6 text-center font-main text-2xl font-light tracking-wider text-rosebrown-500"> Formações: <br />

          ♡ Cert. Terapeuta Multimensional, APTMD <br />

          ♡ Cert. Leitora do Plano de Alma (Soul Plan®), Holistic Healing College of London. <br />

          ♡ Intuitive Healer, Emana Project.</p>
      </div>




    </div>



  );
}

export default About;