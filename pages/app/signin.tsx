import Heading1 from 'components/Heading1'
import Heading2 from 'components/Heading2'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const SignIn = ({ children }: Props) => {
  return (
    <>
      <Heading1>SignIn</Heading1>
      <Heading2>xxxx</Heading2>
      {children}
    </>
  )
}

export default SignIn
