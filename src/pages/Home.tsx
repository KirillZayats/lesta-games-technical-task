import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerPageStyle } from "../styles/AppStyled";
import { useAction } from "../store/hooks/useAction";
import { useSelector } from "react-redux";
import { IVehicles } from "../additionally/interfaces";
import CardVehicles from "../components/CardVehicles";
import SortLine from "../components/SortLine";

const HomeStyle = styled.article`
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleStyle = styled.h2``;

const ListCardStyle = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ElementListStyle = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.HALF_TEXT_COLOR};
`;

const ContainerListStyle = styled.div`
`;

const Home = () => {
  const { data, isLoading } = useSelector((state: any) => state.data);
  const [listVehicles, setListVehicles] = useState<IVehicles[]>();
  useEffect(() => {
    setListVehicles(data.data.vehicles);
  }, [isLoading]);

  return (
    <ContainerPageStyle>
      <HomeStyle>
        <TitleStyle>Home</TitleStyle>
          <ContainerListStyle>
            <SortLine/>
            <ListCardStyle>
              {listVehicles &&
                listVehicles.map(
                  (item, index) =>
                    index < 20 && (
                      <ElementListStyle key={index}>
                        <CardVehicles vehicles={item} />
                      </ElementListStyle>
                    )
                )}
            </ListCardStyle>
          </ContainerListStyle>
      </HomeStyle>
    </ContainerPageStyle>
  );
};

export default Home;
