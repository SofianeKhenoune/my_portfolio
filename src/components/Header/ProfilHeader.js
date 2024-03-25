import Image from 'next/image';
import profilPic from '../../../public/images/profil-home.png';

const ProfilHeader = () => {
  return (
    <div className='flex items-center border-white'>
      <Image
        src={profilPic}
        className='mr-3 rounded-full border border-light'
        alt='profil Logo'
        width={50}
        height={50}
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-[1030px]:hidden'>
        Sofiane Khenoune
      </span>
    </div>
  );
};

export default ProfilHeader;
