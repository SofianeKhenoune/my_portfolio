import Link from 'next/link';
import styles from '../../src/styles/Header.module.scss';
const NavMenu = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link
            href='/'
            className={
              isActive
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
              isActive
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
              isActive
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
              isActive
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
              isActive
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
