import Heading2 from 'components/Heading/Heading2'
import React from 'react'
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form'
import InputGroup, { InputGroupProps } from './InputGroup'

export interface FormProps {
  title: string
  inputGroups: InputGroupProps[]
  handleSubmit: UseFormHandleSubmit<any>
  onSubmit: SubmitHandler<any>
  submitButtonText: string
}

interface Props extends FormProps {
  errors: any
  register: UseFormRegister<any>
}

const Form = ({
  title,
  inputGroups,
  handleSubmit,
  onSubmit,
  submitButtonText,
  register,
  errors
}: Props) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='container max-w-2xl mx-auto shadow-md md:w-3/4 mt-4'
    >
      <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5'>
        <div className='max-w-sm mx-auto md:w-full md:mx-0'>
          <div className='inline-flex items-center space-x-4'>
            <Heading2>{title}</Heading2>
          </div>
        </div>
      </div>

      <div className='space-y-6 bg-white'>
        {inputGroups?.map((inputGroup, index) => (
          <>
            <InputGroup
              title={inputGroup?.title}
              inputs={inputGroup?.inputs}
              register={register}
              errors={errors}
            />
            <hr />
          </>
        ))}

        <div className='w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3'>
          <button
            type='submit'
            className='py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
