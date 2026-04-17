import styles from "../styles/PortfolioPage.module.css";

export function SectionLabel({ text, className = "", marginBottom }) {
  return (
    <div
      className={`${styles.techStackLabel} ${className}`.trim()}
      style={marginBottom ? { marginBottom } : undefined}
    >
      <span className={styles.techStackLinha}></span>
      <span className={styles.techStackLabelTexto}>{text}</span>
      <span className={styles.techStackLinha}></span>
    </div>
  );
}
