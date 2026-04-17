import styles from "../styles/PortfolioPage.module.css";
import { socialLinks } from "../data/content";
import { Reveal } from "./Reveal";
import { useContactForm } from "../hooks/useContactForm";

export function ContactSection() {
  const { formData, status, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  const statusClass =
    styles[
      `contatoFormBotao${status.state.charAt(0).toUpperCase()}${status.state.slice(1)}`
    ] ?? "";

  return (
    <>
      <div className={styles.techStack}>
        <h2 className={styles.techStackTitulo}>
          <span className={styles.techStackBranco}>CONECTE-SE </span>
          <span className={styles.techStackDestaque}>COMIGO</span>
        </h2>
      </div>
      <section id="contato" className={styles.contato}>
        <Reveal as="div" className={styles.contatoFormCard}>
          <div className={styles.contatoFormTopo}>
            <h3 className={styles.contatoFormTitulo}>Enviar uma mensagem</h3>
            <p className={styles.contatoFormSubtitulo}>
              Entrarei em contato com você em até 24 horas.
            </p>
            <div className={styles.contatoFormBarra}></div>
          </div>

          <form className={styles.contatoForm} onSubmit={handleSubmit}>
            <div className={styles.contatoFormGrupo}>
              <label htmlFor="nome">
                <i className="fa-regular fa-user"></i> SEU NOME
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Aurora Vieira"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.contatoFormGrupo}>
              <label htmlFor="email">
                <i className="fa-regular fa-envelope"></i> SEU E-MAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="aurora@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.contatoFormGrupo}>
              <label htmlFor="mensagem">
                <i className="fa-regular fa-comment"></i> SUA MENSAGEM
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Fale-me sobre o seu projeto..."
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`${styles.contatoFormBotao} ${statusClass}`.trim()}
              disabled={isSubmitting}
            >
              {status.label} {status.icon ? <i className={status.icon}></i> : null}
            </button>
          </form>
        </Reveal>

        <Reveal as="div" className={styles.contatoInfo}>
          <div className={styles.contatoDireto}>
            <h3 className={styles.contatoDiretoTitulo}>
              <i className="fa-solid fa-location-arrow"></i> Contato direto
            </h3>

            <div className={styles.contatoDiretoItem}>
              <div className={styles.contatoDiretoIcone}>
                <i className="fa-solid fa-at"></i>
              </div>
              <div>
                <span className={styles.contatoDiretoLabel}>E-MAIL</span>
                <p className={styles.contatoDiretoValor}>
                  jadeferreirae@gmail.com
                </p>
              </div>
            </div>

            <div className={styles.contatoDiretoItem}>
              <div className={styles.contatoDiretoIcone}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <span className={styles.contatoDiretoLabel}>TELEFONE</span>
                <p className={styles.contatoDiretoValor}>+55 34 9 9909-9583</p>
              </div>
            </div>

            <div className={styles.contatoDiretoItem}>
              <div className={styles.contatoDiretoIcone}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <span className={styles.contatoDiretoLabel}>LOCALIZAÇÃO</span>
                <p className={styles.contatoDiretoValor}>Uberaba, MG — Brasil</p>
              </div>
            </div>
          </div>

          <div className={styles.contatoSocial}>
            <h3 className={styles.contatoSocialTitulo}>Presença social</h3>
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
        </Reveal>
      </section>
    </>
  );
}
