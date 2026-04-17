import styles from "../styles/PortfolioPage.module.css";
import { projects } from "../data/content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  return (
    <section id="projetos" className={styles.sectionProjetos}>
      <div className={styles.techStack}>
        <SectionLabel text="ALGUNS DOS MEUS PROJETOS" />
      </div>
      <section className={styles.projetosTech}>
        {projects.map((project) => (
          <Reveal key={project.title} as="section" className={styles.projetoUni}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projDescricao}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.projBadge}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.btnVisit}>
              <a href={project.href} target="_blank" rel="noreferrer">
                Visitar Site<i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </Reveal>
        ))}
      </section>
    </section>
  );
}
