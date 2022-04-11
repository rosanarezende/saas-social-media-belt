import type { NextPage } from 'next'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

import Seo from 'components/Seo'
import Heading1 from 'components/Heading/Heading1'

const Home: NextPage = () => {
  const { data: session } = useSession()
  // const { data: session, status } = useSession()
  // const loading = status === "loading"

  return (
    <div className='m-8'>
      <Seo title={'Social Media Belt'} description={'Social Media Belt'} />

      <div className='flex items-center justify-end'>
        {session ? (
          <>
            <span>
              Olá <strong>{session?.user?.name}</strong>!
            </span>{' '}
            <br />
            <button
              className='font-bold flex m-4 p-2 items-center bg-black shadow text-gray-200 text-md'
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            className='font-bold flex m-4 p-2 items-center bg-black shadow text-gray-200 text-md'
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>

      <Heading1>Social Media Belt</Heading1>

      <div className='flex items-center justify-center'>
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
