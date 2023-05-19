import styles from './offer.module.scss';
import Image from 'next/image';
import truckImage from '../../../public/images/truck-offer.webp';
import truckImageMobile from '../../../public/images/truck-offer-mobile.webp';
import { Tabs } from '@/components/tabs/tabs';
import { TabPane } from '@/components/tabs/tabPane';
import { TabsContent } from '@/components/tabs/tabsContent';

export const Offer = () => {
  return (
    <section className={`${styles.offer} container-fluid`}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.imageWrapper}>
          <Image
            className={`${styles.image} image`}
            src={truckImage}
            alt="truck"
            priority
          />
        </div>
        <div className={`${styles.imageWrapperMobile} image`}>
          <Image className={styles.image} src={truckImage} alt="truck" />
        </div>
        <div className={styles.tabsWrapper}>
          <h3>We offer</h3>
          <Tabs>
            <TabPane title="FOR BROKERS">
              <TabsContent />
            </TabPane>
            <TabPane title="FOR DRIVERS">
              <TabsContent />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
