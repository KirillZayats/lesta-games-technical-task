import React from 'react'
import { ContainerPageStyle } from '../styles/AppStyled'
import styled from 'styled-components'
import imageError from '../resources/error.png';
import { IPropsPageError } from '../additionally/interfaces';

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
const Error: React.FC<IPropsPageError> = ({errorMessage = ''}) => {
  return (
    <ContainerPageStyle>
        <NotFoundStyle>
        <ImageStyle src={imageError}/>
        <TitleErrorStyle>
        {errorMessage ? errorMessage : '404 - page not found'}
        </TitleErrorStyle>
        </NotFoundStyle>
    </ContainerPageStyle>
  )
}

export default Error