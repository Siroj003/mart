import styles from './offer.module.scss';
import Image from 'next/image';
import truckImage from '../../../public/images/truck-offer.webp';
import { Tabs } from '@/components/tabs/tabs';
import { TabPane } from '@/components/tabs/tabPane';
import { TabsContent } from '@/components/tabs/tabsContent';
import { tabBrokers, tabDrivers } from './constants';
import { useState } from 'react';

export const Offer = () => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (e: number) => setTab(e);
  return (
    <section className={`${styles.offer} container-fluid`}>
      <div className={`${styles.wrapper} container`}>
        <div
          className={styles.imageWrapper}
          style={{
            top: tab === 0 ? '27%' : '5%',
          }}
        >
          <div>
            <Image
              className={`${styles.image} image`}
              src={truckImage}
              alt='truck'
              priority
            />
          </div>
        </div>
        <div className={`${styles.imageWrapperMobile} image`}>
          <Image className={styles.image} src={truckImage} alt='truck' />
        </div>
        <div className={styles.tabsWrapper}>
          <h3>We offer</h3>
          <Tabs preSelectedTabIndex={tab} setSelectedTabIndex={handleChangeTab}>
            <TabPane title='FOR BROKERS'>
              <TabsContent list={tabBrokers} />
            </TabPane>
            <TabPane title='FOR DRIVERS'>
              <TabsContent list={tabDrivers} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
