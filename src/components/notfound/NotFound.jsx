import React from 'react'
import styled from 'styled-components'


const NotFound = ({ DarkMode }) => {
  return (
    <Container dark={DarkMode} >
      <h1>Not Found :(</h1>
    </Container>
  )
}

const Container = styled.div`
  position : absolute;
  top : 0 ;
  left : 0 ;
  right : 0 ; 
  bottom : 0 ;
  width : 100% ;
  height : 100% ;
  display : flex ;
  align-items : center ;
  justify-content : center ;
  h1 {
    font-size : 40px ;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
  z-index : 0;
`

export default NotFound