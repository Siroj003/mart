import React, { ReactElement, useState } from 'react';

import styles from './tabs.module.scss';
import { TabTitle, Props as TabTitleProps } from '../tabTitle';

type Props = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex: number;
  setSelectedTabIndex: any;
};

export const Tabs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex, setSelectedTabIndex } = props;

  return (
    <div className={styles.tabs}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === preSelectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>
      {children[preSelectedTabIndex]}
    </div>
  );
};
