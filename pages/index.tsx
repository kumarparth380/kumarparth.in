import type { NextPage } from 'next'
import HitCounter from '../components/HitsCounter'
import MetaData from '../components/MetaData'
import Skills from '../components/Skills'
import Technologies from '../components/Technologies'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="bg-black p-10 pt-20 min-h-screen">
      <MetaData />

      <main className="container md:w-2/3 mx-auto">
        <Landing />
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
        <HitCounter />
      </footer>
    </div>
  )
}

export default Home
