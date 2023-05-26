import styles from './faq.module.scss';
import Image from 'next/image';
import faqImage from '../../../public/images/faq.webp';
import { SubTitle } from '@/components/subTitle';
import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { faqItems } from '@/sections/faq/constants';
import { IconPlus } from '@/components/icons/plus';
import { IconMinus } from '@/components/icons/minus';

export const Faq = () => {
  return (
    <section className={`${styles.faq} container-fluid`}>
      <div className={`${styles.wrapper} container`}>
        <div>
          <div className={styles.title}>
            <SubTitle>FAQ</SubTitle>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Accordion className={styles.accordion}>
            {faqItems.map(({ header, content }, i) => (
              <AccordionItem
                key={i}
                initialEntered={i === 0}
                className={styles.accordionItem}
                header={({ state }) => (
                  <div className={styles.accordionItemTitle}>
                    {header}{' '}
                    <div>{state.isEnter ? <IconMinus /> : <IconPlus />}</div>
                  </div>
                )}
              >
                <div className={styles.accordionContent}>
                  <p>{content}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <Image className={styles.image} src={faqImage} alt='storage' />
        </div>
      </div>
    </section>
  );
};
