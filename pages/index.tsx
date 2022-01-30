import type { NextPage } from 'next'
import Image from 'next/image'
import HitCounter from '../components/HitsCounter'
import MetaData from '../components/MetaData'
import Skills from '../components/Skills'
import Technologies from '../components/Technologies'

const Home: NextPage = () => {
  return (
    <div className="bg-black p-10 pt-20 min-h-screen">
      <MetaData />

      <main className="container md:w-2/3 mx-auto">
        <h1 className="text-gray-100 text-5xl">Hi, I&apos;m Parth</h1>
        <p className="text-gray-300 text-lg mt-10">
          {' '}
          I am a JavaScript developer with more than 3.2 years of software
          development experience and skills in full-stack development with
          technologies like Nodejs, Express, GraphQL, React, Angular and have
          also made some mobile apps using react-native. I have also experience
          in Google Firebase(GCP) and AWS. I like to play video games and listen
          music.
        </p>
        <Skills />
        <Technologies />
      </main>

      <footer className="flex align-center justify-between">
        <a
          className="text-gray-300 bottom-0 md:mr-10"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Made with NextJS and tailwindcss{' '}
        </a>
        <HitCounter />
      </footer>
    </div>
  )
}

export default Home
