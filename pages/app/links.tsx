import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Heading1 from 'components/Heading1'
import Heading2 from 'components/Heading2'

interface Props {
  children: React.ReactNode
}

type NewLinkForm = {
  name: string
  publicName: string
  slug: string
  destination: string
  appLink: string
}

const Form = () => {
  const { register, handleSubmit, watch } = useForm<NewLinkForm>()

  const onSubmit: SubmitHandler<NewLinkForm> = (inputsData) => {
    console.log(inputsData)
  }

  console.log(watch('name'))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='container max-w-2xl mx-auto shadow-md md:w-3/4 mt-4'
    >
      <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5'>
        <div className='max-w-sm mx-auto md:w-full md:mx-0'>
          <div className='inline-flex items-center space-x-4'>
            <Heading2>Criar link</Heading2>
          </div>
        </div>
      </div>
      <div className='space-y-6 bg-white'>
        <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
          <h2 className='max-w-sm mx-auto md:w-1/3'>Identificação</h2>
          <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
            <div className=' relative '>
              <input
                type='text'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Nome interno'
                {...register('name')}
              />
            </div>
            <div className=' relative '>
              <input
                type='text'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Nome público'
                {...register('publicName')}
              />
            </div>
            <div className=' relative '>
              <input
                type='text'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Identificador (slug)'
                {...register('slug')}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
          <h2 className='max-w-sm mx-auto md:w-1/3'>Destino</h2>
          <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
            <div>
              <div className=' relative '>
                <input
                  type='text'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='http://'
                  {...register('destination')}
                />
              </div>
            </div>
            <div>
              <div className=' relative '>
                <input
                  type='text'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='TDB: link interno para app'
                  {...register('appLink')}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3'>
          <button
            type='submit'
            className='py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

const Links = ({ children }: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <Heading1>Gerenciador de Links</Heading1>
          <Heading2>Gerenciador de links</Heading2>
        </div>

        <div className='flex items-center'>
          <button
            type='button'
            className='w-full border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2'
          >
            Criar Link
          </button>
          <button
            type='button'
            className='w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2'
          >
            Criar Grupo
          </button>
        </div>
      </div>

      <Form />
      {children}
    </>
  )
}

export default Links