import styles from "../styles/PortfolioPage.module.css";
import { Reveal } from "./Reveal";
import { socialLinks } from "../data/content";

export function HeroSection() {
  return (
    <div className={styles.principal}>
      <div className={styles.sectionApresentacao}>
        <section className={styles.principalApresentacao}>
          <div className={styles.divApresentacao}>
            <p className={styles.apresentacaoBotao}>BEM-VINDO AO MEU MUNDO</p>
            <h1 className={styles.apresentacaoTituloPrincipal}>
              Oi, eu sou <strong>Jade Ferreira</strong>
            </h1>
            <p className={styles.apresentacaoDescricaoDest}>
              Desenvolvedora Front-End & Criadora de Experiências Digitais
            </p>
            <p className={styles.apresentacaoDescricao}>
              Transformando ideias em <strong>soluções web modernas,</strong>{" "}
              funcionais e orientadas a resultado.
            </p>
          </div>

          <div className={styles.heroSocialSpacing}>
            <div className={styles.contatoSocialIcones}>
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contatoSocialIcone}
                  aria-label={item.label}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.divBotoes}>
            <a
              className={styles.divBotoesCtt}
              href="https://wa.me/5534999099583?text=Olá%20Jade%2C%20vim%20pelo%20seu%20portfólio!"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-mobile"></i>CONTATE-ME
            </a>
            <a
              className={styles.divBotoesBaixar}
              href="/assets/Curriculo.JadeFerreira.docx"
              download="Curriculo.JadeFerreira.docx"
            >
              <i className="fas fa-download"></i>BAIXAR CURRÍCULO
            </a>
          </div>
        </section>

        <Reveal as="section" className={styles.codeApresentacao}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={styles.dots}>
                <span className={`${styles.dot} ${styles.roxoPrincipal}`}></span>
                <span className={`${styles.dot} ${styles.roxoSecundario}`}></span>
                <span className={`${styles.dot} ${styles.roxoTerceario}`}></span>
              </div>
              <span className={styles.fileName}>Portfolio.js</span>
            </div>

            <div className={styles.codeBody}>
              <pre>
                <code>
                  <span className={styles.keyword}>const</span> developer = {"{"}
                  {"\n"}  name: <span className={styles.string}>'Jade Ferreira'</span>,
                  {"\n"}  role: <span className={styles.string}>'Front-End Developer'</span>,
                  {"\n"}  skills: [<span className={styles.string}>'React.js'</span>, <span className={styles.string}>'Next.js'</span>, <span className={styles.string}>'TypeScript'</span>],
                  {"\n"}  available: <span className={styles.boolean}>true</span>
                  {"\n"}{"};"}
                  {"\n"}
                  <span className={styles.keyword}>developer</span>.showcase();
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
