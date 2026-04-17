import styles from "../styles/PortfolioPage.module.css";
import {
  certifications,
  timelineEducation,
  timelineExperience,
} from "../data/content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

function TimelineItem({ item }) {
  const sideClass =
    item.side === "right" ? styles.timelineItemDireita : styles.timelineItemEsquerda;

  return (
    <Reveal as="div" className={`${styles.timelineItem} ${sideClass}`}>
      <div className={styles.timelineIcone}>
        <i className="fab fa-dev"></i>
      </div>
      <div className={styles.timelineData}>
        <i className="fa-regular fa-calendar"></i> {item.date}
      </div>
      <div className={styles.timelineCard}>
        {item.title ? <h3 className={styles.timelineCardTitulo}>{item.title}</h3> : null}
        {item.company ? (
          <p className={styles.timelineCardEmpresa}>
            <i className="fa-solid fa-fire"></i>
            {item.company}
          </p>
        ) : null}
        {item.image ? <img src={item.image} alt={item.imageAlt ?? ""} /> : null}
        {item.items ? (
          <ul className={styles.timelineCardLista}>
            {item.items.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Reveal>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className={styles.sectionExperiencia}>
      <div className={styles.techStack}>
        <h2 className={styles.techStackTitulo}>
          <span className={styles.techStackBranco}>MINHAS </span>
          <span className={styles.techStackDestaque}>QUALIFICAÇÕES</span>
        </h2>
        <SectionLabel text="EXPERIÊNCIA" />
      </div>

      <section className={styles.timeline}>
        {timelineExperience.map((item, index) => (
          <TimelineItem key={`${item.date}-${index}`} item={item} />
        ))}
      </section>

      <SectionLabel text="EDUCAÇÃO" />

      <section className={styles.timeline}>
        {timelineEducation.map((item, index) => (
          <TimelineItem key={`${item.date}-${index}`} item={item} />
        ))}
      </section>

      <SectionLabel text="CERTIFICAÇÕES" />

      <section className={styles.timeline}>
        <Reveal as="div" className={`${styles.timelineItem} ${styles.timelineItemDireita}`}>
          <div className={styles.timelineIcone}>
            <i className="fab fa-dev"></i>
          </div>
          <div className={styles.timelineCard}>
            <p className={styles.timelineCardEmpresa}>
              <i className="fa-solid fa-fire"></i>Certificações tech
            </p>
            <ul className={styles.timelineCardLista}>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </section>
  );
}
