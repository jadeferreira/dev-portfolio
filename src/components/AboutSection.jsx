import styles from "../styles/PortfolioPage.module.css";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <Reveal as="section" id="sobre" className={styles.secaoSub}>
      <section className={styles.secaoSubDescricao}>
        <div className={styles.techStack}>
          <SectionLabel text="UM SOBRE MIM" marginBottom="20px" />
        </div>
        <h2 className={styles.secaoSubTitulo}>
          Sua <strong>Front-End Developer</strong> a partir de agora
        </h2>
        <div className={styles.secaoSubParagrafos}>
          <p>
            Sou desenvolvedora formada em Análise e Desenvolvimento de Sistemas,
            com interesse em desenvolvimento web e soluções baseadas em dados.
            Tenho experiência na criação e customização de interfaces,
            desenvolvimento de sites e e-commerces, além de trabalhar com
            outras tecnologias.
          </p>
          <p>
            Atualmente estou me especializando em Inteligência Artificial e
            Ciência de Dados, aprofundando conhecimentos em análise de dados,
            machine learning e desenvolvimento de aplicações baseadas em dados.
          </p>
          <p>
            Busco constantemente evoluir como desenvolvedora, criando soluções
            que unam tecnologia, usabilidade e boas práticas de desenvolvimento.
          </p>
        </div>
        <div className={styles.secaoSubInformacoes}>
          <ul>
            <li>
              <strong>Cargo:</strong> Freelancer, Front-End Developer, UI/UX Designer
            </li>
            <div className={styles.secaoLinhaInfor}></div>
            <li>
              <strong>Email:</strong>
              <span> jadeferreirae@gmail.com</span>
            </li>
            <div className={styles.secaoLinhaInfor}></div>
            <li>
              <strong>Idade:</strong> 20 anos
            </li>
            <div className={styles.secaoLinhaInfor}></div>
          </ul>
          <div className={styles.secaoSubBtn}>
            <a
              href="https://wa.me/5534999099583?text=Olá%20Jade%2C%20vim%20pelo%20seu%20portfólio!"
              target="_blank"
              rel="noreferrer"
            >
              VIA WHATSAPP
            </a>
          </div>
        </div>
      </section>
      <section className={styles.secaoSubImagem}>
        <img
          src="/assets/images/foto-desktop.png"
          alt="Foto de perfil de Jade Ferreira. Cabelo castanho escuro até os ombros, olhos castanhos e sorriso amigável"
          className={styles.secaoSubImagemFoto}
        />
      </section>
    </Reveal>
  );
}
