import React, { useEffect } from "react";
import { IPropsBg, IPropsVehicles } from "../additionally/interfaces";
import styled from "styled-components";

const TextStyle = styled.span`
  font-size: 22px;
`;

const CardVehiclesStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  margin: 20px auto;

`;

const ImageNationStyle = styled.img`
  width: 100px;
  object-fit: contain;
`;

const ImageViewStyle = styled.img`
  width: 80px;
  object-fit: contain;
`;

const ImageTypeStyle = styled.img`
  width: 30px;
  object-fit: contain;
`;

const CardVehicles: React.FC<IPropsVehicles> = ({ vehicles }) => {
  useEffect(() => {
    if (vehicles) {
      console.log(vehicles);
    }
  }, [vehicles]);

  return (
    <CardVehiclesStyle>
      <ImageNationStyle src={vehicles.nation.icons.large} />
      <ImageTypeStyle src={vehicles.type.icons.default} />
      <TextStyle>{vehicles && vehicles.level}</TextStyle>
      <ImageViewStyle src={vehicles.icons.medium} />
      <TextStyle>{vehicles && vehicles.title}</TextStyle>
    </CardVehiclesStyle>
  );
};

export default CardVehicles;
