import React, { useState } from 'react'

import * as S from './styles'
import * as G from '../../GlobalStyles'

const Main = () => {
  const [nickname, setName] = useState("")

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onSubmitEnter = e => {
    e.preventDefault()


  }
  
  return (
    <S.Wrapper>
      <G.Title gra center fontSize="100px" fontWeight={600} margin="15px auto">SketchQuiz</G.Title>
      <S.InputWrapper>
        <S.FormEnter onSubmit={onSubmitEnter}>
          <S.InputName value={nickname} onChange={onChangeName} />
          <S.InputButton>START</S.InputButton>
        </S.FormEnter>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Main