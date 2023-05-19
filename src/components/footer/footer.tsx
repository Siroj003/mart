import React from 'react';
import { navlist } from '@/constants/nav';
import Link from 'next/link';
import { social } from '@/constants/social';
import { IconLogoFooter } from '@/components/icons/logo';
import styles from './footer.module.scss';
import { contacts } from '@/constants/contacts';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container-fluid`}>
      <div className='container'>
        <div className={styles.up}>
          <div className={styles.left}>
            <IconLogoFooter />
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            {/* <div className={styles.social}>
							{social.map(({ href, Icon }, index) => (
								<Link href={href} key={index}>
									<Icon />
								</Link>
							))}
						</div> */}
          </div>
          <div className={styles.right}>
            <div className={styles.pages}>
              <h3>Pages</h3>
              <ul>
                {navlist.map(({ title, href }, index) => (
                  <li key={index}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Contacts</h3>
              <div className={styles.contacts}>
                {contacts.map(({ title, text, Icon, link }, index) => (
                  <Link className={styles.link} href={link} key={index}>
                    <Icon />
                    <div className={styles.details}>
                      <span>{title}</span>
                      <p>{text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.downInfo}>
            <span>Created by</span>
            <h3>Quantum IT Solutions</h3>
          </div>
          <div>
            <span>© 2022-{new Date().getFullYear()}, All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
