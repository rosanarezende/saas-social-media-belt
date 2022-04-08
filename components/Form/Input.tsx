import React from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface InputProps {
  placeholder: string
  name: string
  errorMessage?: string
}

interface Props extends InputProps {
  errors: any
  register: UseFormRegister<any>
}

const Input = ({
  name,
  placeholder,
  errorMessage,
  register,
  errors
}: Props) => {
  return (
    <div className=' relative '>
      <input
        type='text'
        className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
        placeholder={placeholder}
        {...register(name)}
      />
      <p>{errors[name]?.message && (errorMessage || 'Campo obrigatório')}</p>
    </div>
  )
}

export default Input
