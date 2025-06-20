import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          My <span>Portfolio</span>
        </a>
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ""}`}
        >
          <ul>
            <li>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button onClick={toggleDarkMode} className={styles.themeToggle}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMobileMenu} className={styles.mobileToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
