import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import styles from '../styles/layout.module.scss';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { Footer } from '@/components/footer';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <DefaultSeo
        title="Martian"
        description="This example uses more of the available config options."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'Martian',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
