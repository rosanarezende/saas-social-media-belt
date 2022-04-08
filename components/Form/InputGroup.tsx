import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import Input, { InputProps } from './Input'

export interface InputGroupProps {
  title: string
  inputs: InputProps[]
}

interface Props extends InputGroupProps {
  errors: any
  register: UseFormRegister<any>
}

const InputGroup = ({ title, inputs, register, errors }: Props) => {
  return (
    <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
      <h2 className='max-w-sm mx-auto md:w-1/3'>{title}</h2>
      <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
        {inputs?.map((input, index) => (
          <Input
            key={index}
            register={register}
            errors={errors}
            name={input?.name}
            placeholder={input?.placeholder}
            errorMessage={input?.errorMessage}
          />
        ))}
      </div>
    </div>
  )
}

export default InputGroup
