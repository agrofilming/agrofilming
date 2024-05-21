import styles from './index.module.scss';
import { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ModalComponent } from '@/components/Modal';

interface IProject {
  video: string;
  img: StaticImageData;
  title: string;
}

export const Project: FC<IProject> = ({ video, img, title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.container} onClick={() => setModalOpen(true)}>
      <Image src={img} alt={'image'} />
      <div className={styles.hover}>
        <h4>{title}</h4>
      </div>
      <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <video src={video} autoPlay={modalOpen} controlsList={'nodownload'}></video>
      </ModalComponent>
    </div>
  );
};
