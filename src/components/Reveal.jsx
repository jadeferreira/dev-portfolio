import styles from "../styles/PortfolioPage.module.css";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <Tag
      ref={ref}
      className={`${styles.revelar} ${isVisible ? styles.visivel : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
