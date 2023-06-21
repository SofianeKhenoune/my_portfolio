import Image from 'next/image';
import styles from '../../src/styles/Project.module.scss';

const Project = ({ link, bgImg, altText, arrayOfIcons }) => {
  return (
    <div className={styles.project}>
      <a href={link} target='_blank'>
        <Image
          src={`/images/${bgImg}`}
          alt={altText}
          width={1000}
          height={1000}
        />
      </a>
      {arrayOfIcons.map((icon) => (
        <Image
          src={`/images/${icon.img}`}
          alt={icon.altText}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default Project;
