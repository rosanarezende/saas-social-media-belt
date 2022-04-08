import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  href: string
  svg: {
    viewBox: string
    path: string
  }
  title: string
  counter?: number
}

const MenuItem = ({ href, svg, title, counter }: Props) => {
  const { pathname } = useRouter()
  const selected = pathname === href

  return (
    <>
      <Link href={href}>
        <a
          className={
            selected
              ? 'w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500'
              : 'w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent'
          }
        >
          <span className='text-left'>
            <svg
              width={20}
              height={20}
              fill='currentColor'
              viewBox={svg.viewBox}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d={svg.path}></path>
            </svg>
          </span>

          <span className='mx-4 text-sm font-normal'>
            {title}
            {!!counter && (
              <span className='p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs'>
                {counter}
              </span>
            )}
          </span>
        </a>
      </Link>
    </>
  )
}

export default MenuItem
