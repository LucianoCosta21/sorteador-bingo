import styles from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <p className={styles.nav_texto}>Sorteador de Bingo</p>
        <div className={styles.nav_container_texto}>
          <Link to={'/'}>Sorteador</Link>
          <Link to={'/Cartela'}>Gerar Cartelas</Link>
          <button>DarkMode</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
