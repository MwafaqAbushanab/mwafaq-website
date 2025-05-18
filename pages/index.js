// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '../public/avatar.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Mwafaq N Abu-Shanab | Agile & AI Leader</title>
        <meta name="description" content="Director of Automation | Agile Coach | AI Strategist | Entrepreneur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Image src={avatar} alt="Mwafaq's Avatar" width={120} height={120} className="mx-auto rounded-full shadow-md" />
          <h1 className="text-4xl font-bold mt-4">I enable people to reach their potential.</h1>
          <p className="mt-2 text-lg">Director of Automation | Agile Coach | AI Strategist | Future COO & CEO</p>
          <div className="mt-6 space-x-4">
            <Link href="/about" className="bg-white text-blue-700 px-4 py-2 rounded shadow">Learn More</Link>
            <Link href="/contact" className="bg-white text-blue-700 px-4 py-2 rounded shadow">Contact Me</Link>
            <Link href="/ventures" className="bg-white text-blue-700 px-4 py-2 rounded shadow">View Ventures</Link>
          </div>
        </div>
      </header>
    </div>
  );
}
