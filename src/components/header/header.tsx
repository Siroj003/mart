import styles from './header.module.scss';
import { IconLogo } from '@/components/icons/logo';
import Link from 'next/link';
import { Button } from '@/components/button';
import { navlist } from '@/constants/nav';
import React from 'react';

export const Header = () => {
  return (
    <header className={`${styles.headerContainer} container-fluid`}>
      <div className={`${styles.headerWrap} container`}>
        <Link href='/'>
          <IconLogo />
        </Link>
        <nav className={styles.nav}>
          <ul>
            {navlist.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href='/#contacts'>
          <Button>Get in touch</Button>
        </Link>
      </div>
    </header>
  );
};
