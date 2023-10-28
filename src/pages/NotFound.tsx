import React from 'react'
import { ContainerPageStyle } from '../styles/AppStyled'
import styled from 'styled-components'
import imageError from '../resources/error.png';

const NotFoundStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
`;
const ImageStyle = styled.img`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;
const TitleErrorStyle = styled.h2`
  
`;
const NotFound = () => {
  return (
    <ContainerPageStyle>
        <NotFoundStyle>
        <ImageStyle src={imageError}/>
        <TitleErrorStyle>
        404 - page not found
        </TitleErrorStyle>
        </NotFoundStyle>
    </ContainerPageStyle>
  )
}

export default NotFound