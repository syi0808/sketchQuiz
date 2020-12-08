import React, { useState } from 'react'

const Main = () => {
  const [nickname, setName] = useState("")

  const onChangeName = e => {
    setName(e.target.value)
  }
  
  return (
    <>
      
    </>
  )
}

export default Main