import React from 'react';
import styles from './main.module.scss';
import Image from 'next/image';
import loadImage from '../../../public/images/load.webp';
import BgImage from '../../../public/images/map.webp';

export const Main = () => {
  return (
    <section id="main" className="container-fluid">
      <div className={`${styles.main} container`}>
        <Image src={BgImage} alt="background" className={styles.bg_image} />
        <div className={styles.text}>
          <h1>
            YOUR GOODS, <br />
            OUR FLEET – <span>LET&apos;S GO!</span>
          </h1>
          <h3>Fast, reliable and dedicated trucking across 48 states.</h3>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className={styles.info}>
            <div>
              <h2>10+</h2>
              <span>Years Experience</span>
            </div>
            <div>
              <h2>3594</h2>
              <span>Satisfied Clients</span>
            </div>
          </div>
        </div>
        <div>
          <Image className={styles.image} src={loadImage} alt="load" />
        </div>
      </div>
    </section>
  );
};
