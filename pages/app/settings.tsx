import Heading1 from 'components/Heading1'
import Heading2 from 'components/Heading2'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Settings = ({ children }: Props) => {
  return (
    <>
      <Heading1>Configurações</Heading1>
      <Heading2>xxxx</Heading2>
      {children}
    </>
  )
}

export default Settings
