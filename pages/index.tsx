import type { NextPage } from 'next'
import Image from 'next/image'
import HitCounter from '../components/HitsCounter'
import MetaData from '../components/MetaData'
import Skills from '../components/Skills'
import Technologies from '../components/Technologies'
import parthPic from '../public/parth.jpeg'

const Home: NextPage = () => {
  return (
    <div className="bg-black p-10 pt-20 min-h-screen">
      <MetaData />

      <main className="container md:w-2/3 mx-auto">
        <div className="flex flex-col h-screen items-center justify-center">
          <Image
            height={160}
            width={160}
            className="self-center rounded-full"
            objectFit="cover"
            placeholder="blur"
            alt="my-pic"
            src={parthPic}
          />
          <h1 className="text-gray-100 text-4xl font-semibold mt-6 my-4">
            Kumar Parth
          </h1>
          <h2 className="text-gray-100 text-2xl my-2 break-normal">
            Software Engineer
          </h2>
        </div>
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
