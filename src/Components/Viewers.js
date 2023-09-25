import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <div className='mt-8'>
        <h1 style={{fontSize:30, fontWeight:700}}>WE PROVIDE</h1>
    <Container>
      <Wrap>
        <h3>DESIGN</h3>
      </Wrap>
      <Wrap>
      <h3>SUPPLY</h3>
      </Wrap>
      <Wrap>
      <h3>MAINTAIN</h3>
      </Wrap>
      <Wrap>
        <h3>INSTALL</h3>
      </Wrap>
    </Container>
    </div>
  )
}

export default Viewers

const Container = styled.div`
margin-top: 20px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
display: flex;
height: 10vw;
border: 2px solid #ccbdbd;
border-radius: 10px;
cursor: pointer;
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
justify-content: center;
align-items: center;
background-color: #657af2;

h3 {
    font-size:20px;
  color:white;
  font-weight:bolder;
}

&:hover {
 box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
 rgb(0 0 0 / 72%) 0px 30px 22px -10px;   
 transform: scale(1.05);
 border-color: rgba(249, 249, 249, 0.8);
}
`