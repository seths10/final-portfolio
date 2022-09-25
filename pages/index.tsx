import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { HomeIcon } from '@heroicons/react/24/solid';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/5 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Seth&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <HomeIcon className='h-8 w-8 animate-pulse' />
          </div>
        </footer>
      </Link>

    </div>
  );
};

export default Home;
