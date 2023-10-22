import React from 'react'
import { ContainerPageStyle } from '../styles/AppStyled'
import styled from 'styled-components'

const NotFoundStyle = styled.div``;

const NotFound = () => {
  return (
    <ContainerPageStyle>
        <NotFoundStyle>
        Not Found
        </NotFoundStyle>
    </ContainerPageStyle>
  )
}

export default NotFound