import Image from 'next/image'
import parthPic from '../../public/parth.jpeg'
import styles from './Landing.module.css'

const Landing = () => (
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
    <div className="mt-8">
      <svg viewBox="0 0 68 33" className={styles['chevron-down']}>
        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
      </svg>
    </div>
  </div>
)

export default Landing
