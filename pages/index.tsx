import type { NextPage } from 'next'
import Image from 'next/image'
import Link from "next/link"
import Seo from '../components/seo'
import s from "../styles/Home.module.css"

const Home: NextPage = () => {
  const getUrl = (slug: string) => `/brewer/${slug}`
  const iconDimension = "100px"
  return (
    <div>

      <Seo />
      <h1>Welcome to Coffee Timer</h1>
      <p>Please, select a device:</p>
      <ul className={s.brewerList}>
        <li>
          <Link href={getUrl("aeropress")}>
            <a>
              <Image alt='Aeropress brewer' src={`/aeropress.svg`} width={iconDimension} height={iconDimension}></Image>
              AeroPress
            </a>
          </Link>
        </li>
        <li>
          <Link href={getUrl("vsixty")}>
            <a>
              <Image alt='V60 brewer' src={`/v60.svg`} width={iconDimension} height={iconDimension}></Image>
              V60
            </a>
          </Link>
        </li>
        <li>
          <Link href={getUrl("moka")}>
            <a>
              <Image alt='Moke pot' src={`/moka.svg`} width={iconDimension} height={iconDimension}></Image>
              Moka
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
