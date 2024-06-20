import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.scss';
import { Header } from '@/components/header';

import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'An Awesome Weather Next.js App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles.body)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
