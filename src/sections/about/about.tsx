import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';
import { IconBox } from '@/components/icons/box';
import { IconMoney } from '@/components/icons/money';
import storage from '../../../public/images/storage.webp';
import { SubTitle } from '@/components/subTitle';

export const About = () => {
  return (
    <div id='about' className={`${styles.about} container-fluid`}>
      <div className={styles.backgroud} />
      <div className={`${styles.card} container`}>
        <div className={styles.cardInfo}>
          <SubTitle>Why Us</SubTitle>
          <h2 className={styles.title}>
            We provide full range global <br /> logistics solution
          </h2>
          <div className={styles.text}>
            <p>
              Our logistics company specializes in general freight
              transportation using semi trucks and trailers, serving interstate
              destinations across the United States. We have built a reputation
              for reliability, efficiency, and excellent customer service. Our
              extensive network and fleet of well-maintained vehicles enable us
              to handle various types of freight efficiently and securely.
            </p>
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
          <div className={styles.wrapIcon}>
            <div>
              <IconBox />
              Delivery on Time
            </div>
            <div>
              <IconMoney />
              Optimized Travel Cost
            </div>
          </div>
        </div>
        <div>
          <Image className={styles.image} src={storage} alt='storage' />
        </div>
      </div>
    </div>
  );
};
