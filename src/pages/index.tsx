import Head from 'next/head';
import { Main } from '@/sections/main';
import { Services } from '@/sections/services';
import { About } from '../sections/about';
import React from 'react';
import { Contacts } from '@/sections/contacts';
import { Offer } from '@/sections/offer';
import { Faq } from '@/sections/faq';
import { Sponsors } from '@/sections/sponsors';

export default function Home() {
  return (
    <>
      <Head>
        <title>Martian Express.CO</title>
        <meta
          name='description'
          content='Landing page for Martian Express.CO'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='icons/favicon.svg' />
      </Head>
      <>
        <Main />
        <About />
        <Offer />
        <Services />
        <Faq />
        <Contacts />
        <Sponsors />
      </>
    </>
  );
}
