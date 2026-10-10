import SectionTitle from './SectionTitle.jsx';
import { IconGift, IconHand, IconHeart, IconSparkle } from './Icons.jsx';

const VALUES = [
  { icon: IconHand, title: 'Feito à mão', text: 'Cada lote é preparado artesanalmente, em pequenas quantidades.' },
  { icon: IconSparkle, title: 'Personalizado', text: 'Tags, cores e laços combinando com o tema da sua festa.' },
  { icon: IconGift, title: 'Para presentear', text: 'Embalagens pensadas para encantar quem recebe.' },
  { icon: IconHeart, title: 'Com carinho', text: 'Do preparo à entrega, cuidamos de cada detalhe.' },
];

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <SectionTitle eyebrow="Nossa história" title="Sobre a Bia" />

        <div className="about__grid">
          <div className="about__image">
            <div className="lace-frame">
              <img src="/images/festa.jpg" alt="Mesa de festa decorada com saquinhos e caixinhas de pipoca da Bia" loading="lazy" />
            </div>
            <div className="about__quote">
              <span className="script">Pequenos detalhes,</span>
              <span className="script">grandes momentos.</span>
            </div>
          </div>

          <div className="about__copy">
            <p className="lead">
              A <strong>Bia Pipocas</strong> nasceu do desejo de transformar a pipoca — aquele docinho que todo
              mundo ama — em um <em>mimo especial</em>, digno das comemorações mais importantes.
            </p>
            <p>
              Unimos receitas artesanais, ingredientes selecionados e o capricho da confeitaria fina para criar
              pipocas gourmet que são, ao mesmo tempo, deliciosas e decorativas. Elas aparecem em aniversários,
              chás, casamentos, batizados, eventos corporativos e naqueles presentes que dizem "pensei em você".
            </p>
            <p>
              Cada encomenda é única: escolhemos juntos os sabores, as embalagens, as cores e os laços para que
              tudo combine com a sua celebração.
            </p>

            <ul className="values">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="value">
                  <span className="value__icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
