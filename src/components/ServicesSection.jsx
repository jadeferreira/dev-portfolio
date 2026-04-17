import styles from "../styles/PortfolioPage.module.css";
import { services } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function ServicesSection() {
  return (
    <section id="servicos" className={styles.sectionServicos}>
      <div className={styles.techStack}>
        <h2 className={styles.techStackTitulo}>
          <span className={styles.techStackBranco}>MEUS </span>
          <span className={styles.techStackDestaque}>SERVIÇOS</span>
        </h2>
        <SectionLabel text="COMO POSSO TE AJUDAR" />
      </div>
      <section className={styles.servicosTech}>
        <span className={styles.servicosResumo}>
          Se você precisa de um site, layout ou quer transformar uma ideia em um
          projeto digital, posso te ajudar.
        </span>
        <section className={styles.servicosUni}>
          {services.map((service) => (
            <section key={service.title} className={styles.servDescricao}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}
