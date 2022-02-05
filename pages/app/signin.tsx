import React from 'react'

interface Props {
  children: React.ReactNode
}

const SignIn = ({ children }: Props) => {
  return (
    <>
      <h1>SignIn</h1>
      {children}
    </>
  )
}

export default SignIn
