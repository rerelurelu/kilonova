import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans_JP, Overpass } from 'next/font/google';
import { ReactNode } from 'react';

import '@/styles/global.scss';

import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { HOME } from '@/const/seo';
import { SITE_URL } from '@/const/url';
import CurrentPageProvider from 'providers/currentPageProvider';

type Props = {
  children: ReactNode;
};

const overpass = Overpass({
  weight: ['400', '500', '600', '700'],
  subsets: [],
  variable: '--font-overpass',
  display: 'swap',
});
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '600', '700'],
  subsets: [],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata = {
  title: {
    default: HOME.TITLE,
    template: '%s | relu',
  },
  description: HOME.DESCRIPTION,
  openGraph: {
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    url: SITE_URL,
    locale: 'ja_JP',
    type: 'website',
  },
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='ja' data-theme='mytheme' className={`${overpass.variable} ${notoSansJP.variable}`}>
      <Analytics mode={'production'} />
      <body>
        <CurrentPageProvider>
          <Header />
          <div className='min-h-screen'>
            <div className='px-12 pb-60 pt-20'>{children}</div>
          </div>
          <Footer />
        </CurrentPageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
