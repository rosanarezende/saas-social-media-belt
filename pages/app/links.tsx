import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Heading1 from 'components/Heading/Heading1'
import Heading2 from 'components/Heading/Heading2'
import Form from 'components/Form/Form'

interface NewLinkInputs {
  name: string
  publicName: string
  slug: string
  destination: string
  appLink: string
}

const newLinkInputsSchema = yup
  .object({
    name: yup.string().required(),
    publicName: yup.string().required(),
    slug: yup.string().required(),
    destination: yup.string().required(),
    appLink: yup.string() // deixei sem obrigatório pra testar o yup
  })
  .required()

const NewLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewLinkInputs>({
    resolver: yupResolver(newLinkInputsSchema)
  })

  const onSubmit: SubmitHandler<NewLinkInputs> = (inputsData) => {
    console.log(inputsData)
  }

  console.log(errors)

  return (
    <Form
      title='Criar Link'
      inputGroups={[
        {
          title: 'Identificação',
          inputs: [
            { placeholder: 'Nome interno', name: 'name' },
            { placeholder: 'Nome público', name: 'publicName' },
            { placeholder: 'Identificador (slug)', name: 'slug' }
          ]
        },
        {
          title: 'Destino',
          inputs: [
            { placeholder: 'http://', name: 'destination' },
            { placeholder: 'TDB: link interno para app', name: 'appLink' }
          ]
        }
      ]}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      submitButtonText='Salvar'
      errors={errors}
      register={register}
    />
  )
}

interface Props {
  children: React.ReactNode
}

const Links = ({ children }: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-8'>
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

      <NewLinkForm />
      {children}
    </>
  )
}

export default Links
