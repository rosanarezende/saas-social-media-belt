import type { NextPage } from 'next'
import Link from 'next/link'
import Seo from 'components/Seo'
import Heading1 from 'components/Heading1'

const Home: NextPage = () => {
  return (
    <div className='m-8'>
      <Seo title={'Social Media Belt'} description={'Social Media Belt'} />

      <Heading1>Social Media Belt</Heading1>

      <div className='flex items-center justify-start'>
        <Link href='/app'>
          <a className='font-bold flex m-4 p-2 items-center bg-white shadow text-gray-600 text-md'>
            Gerenciador (app)
          </a>
        </Link>
        <Link href='/devpleno'>
          <a className='font-bold flex m-4 p-2 items-center bg-white shadow text-gray-600 text-md'>
            Área pública (slug)
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
