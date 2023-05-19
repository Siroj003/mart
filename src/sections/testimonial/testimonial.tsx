import React, { useRef } from 'react';
import styles from './testimonial.module.scss';
import Image from 'next/legacy/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SubTitle } from '@/components/subTitle';
import { testimonialsData } from '@/sections/testimonial/constants';
import { IconLine } from '@/components/icons/line';
import { IconArrowLeft } from '@/components/icons/arrow-left';
import { IconArrowRight } from '@/components/icons/arrow-right';

export const Testimonial = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previous = () => {
    // @ts-ignore
    slider.current?.slickPrev();
  };

  const next = () => {
    // @ts-ignore
    slider.current?.slickNext();
  };

  return (
    <section
      id="testimonials"
      className={`${styles.testimonial} container-fluid`}
    >
      <div className="container">
        <SubTitle>Testimonials</SubTitle>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <h2>
              Sound from our <br />
              happy partners
            </h2>
          </div>
          <div className={styles.titleRight}>
            <div>
              <h2>25+</h2>
              <span>
                Winning award best <br /> shipping company
              </span>
            </div>
            <div>
              <h2>100k+</h2>
              <span>
                Happy customers <br /> around the world
              </span>
            </div>
          </div>
        </div>
        <Slider {...settings} ref={slider}>
          {testimonialsData.map(({ photo, text, job, name }, index) => {
            return (
              <div key={index}>
                <div className={styles.slide}>
                  <div className={styles.image}>
                    <Image src={photo} alt="photo" />
                  </div>
                  <p>{text}</p>
                  <IconLine />
                  <h3>{name}</h3>
                  <span>{job}</span>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className={styles.arrows}>
          <div onClick={previous}>
            <IconArrowLeft />
          </div>
          <div onClick={next}>
            <IconArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};
