import styles from "../styles/PortfolioPage.module.css";
import { navItems } from "../data/content";

export function Header() {
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.cabecalhoNav}>
        <ul className={styles.cabecalhoNavMenu}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
