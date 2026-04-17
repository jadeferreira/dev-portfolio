import styles from "../styles/PortfolioPage.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerConteudo}>
        <div className={styles.footerLogo}>
          <h2 className={styles.footerLogoNome}>
            Jade <span> Ferreira</span>
          </h2>
          <p className={styles.footerLogoDesc}>
            Desenvolvedora Front-End & Criadora de Experiências Digitais
          </p>
        </div>
      </div>
      <div className={styles.footerDivisor}></div>
      <div className={styles.footerRodape}>
        <p>
          © 2026 <strong>Jade Ferreira</strong>. Todos os direitos reservados.
        </p>
        <p>
          Feito com <strong>amor</strong> e muito café ☕
        </p>
      </div>
    </footer>
  );
}
