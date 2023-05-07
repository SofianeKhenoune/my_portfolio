import Link from 'next/link';
import styles from '../../src/styles/Header.module.scss';
import { useRouter } from 'next/router';
const NavMenu = () => {
  const pathname = useRouter().pathname;

  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link
            href='/'
            className={
              pathname === '/'
                ? `${styles.nav_item} + ${styles.nav_item_active}`
                : styles.nav_item
            }
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={
              pathname === '/about'
                ? `${styles.nav_item} + ${styles.nav_item_active}`
                : styles.nav_item
            }
          >
            about me
          </Link>
        </li>
        <li>
          <Link
            href='/education'
            className={
              pathname === '/education'
                ? `${styles.nav_item} + ${styles.nav_item_active}`
                : styles.nav_item
            }
          >
            education
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={
              pathname === '/projects'
                ? `${styles.nav_item} + ${styles.nav_item_active}`
                : styles.nav_item
            }
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className={
              pathname === '/contact'
                ? `${styles.nav_item} + ${styles.nav_item_active}`
                : styles.nav_item
            }
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
