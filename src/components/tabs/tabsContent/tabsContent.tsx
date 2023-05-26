import React from 'react';
import styles from './tabsContent.module.scss';

interface ITabsProps {
  list: { text: string; title: string }[];
}

export const TabsContent = ({ list }: ITabsProps) => {
  return (
    <div className={styles.wrapper}>
      {list.map(({ text, title }, index) => {
        return (
          <div className={styles.block} key={index}>
            <h4>
              <span>{`0${index + 1}`}</span>
              {title}
            </h4>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
