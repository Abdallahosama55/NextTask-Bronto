// app/layout.tsx
import './globals.css';
import React from 'react';
import Head from 'next/head';

import { IoMdArrowDropdown } from 'react-icons/io';
import Navbar from '@/components/Navbar';
import  Sidebar  from '@/components/Sidebar';

export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <div className="flex h-screen overflow-hidden bg-[#fbfbfb] relative">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar/>
        <div className="flex-1 py-12 px-2 lg:h-[83vh] rounded-2xl lg:mx-6 bg-[#fbfbfb] font-poppins overflow-y-auto"  style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
       { children}
        </div>
      </div>
      </div>
      </body>
    </html>
  );
}
