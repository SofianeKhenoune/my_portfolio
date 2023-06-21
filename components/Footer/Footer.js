import { SiJavascript, SiReact, SiNextdotjs } from 'react-icons/si';
import styles from '../../src/styles/Footer.module.scss';
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_content}>
        <p>Portfolio codé en avec :</p>
        <div className={styles.footer_logos}>
          <SiJavascript size={40} />
          <SiNextdotjs size={40} />
          <SiReact size={40} />
        </div>
      </div>
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
