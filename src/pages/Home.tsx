import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerPageStyle } from "../styles/AppStyled";
import { useAction } from "../hooks/useAction";
import { useSelector } from "react-redux";
import { IVehicles } from "../additionally/interfaces";
import CardVehicles from "../components/home/CardVehicles";
import SortLine from "../components/home/SortLine";
import { Pagination, PaginationItem } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

const ContainerListStyle = styled.div`
  .pagination ul {
    margin: 10px auto;
    flex-direction: row;
    justify-content: center;
  }

  .MuiPaginationItem-root {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  .MuiPaginationItem-root.Mui-selected {
    background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
`;

const Home = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading } = useSelector((state: any) => state.data);
  const [listVehicles, setListVehicles] = useState<IVehicles[]>();
  const [nowPage, setNowPage] = useState<number>(
    parseInt(location.search.split("=")[1]) || 1
  );
  const limit = 50;

  useEffect(() => {
    setListVehicles(
      data.data.vehicles.filter(
        (vehicle: IVehicles, index: number) =>
          index < limit * nowPage && index >= limit * (nowPage - 1) && vehicle
      )
    );
  }, [isLoading]);

  useEffect(() => {
    if ( location.search && (Number.isNaN(parseInt(location.search.split("=")[1])) ||
    parseInt(location.search.split("=")[1]) < 1 ||
    parseInt(location.search.split("=")[1]) >
      data.data.vehicles.length / limit)
      
    ) {
      navigate(`*`);
    }
  }, [useLocation]);

  const onChangePage = (num: number) => {
    setNowPage(num);
    setListVehicles(
      data.data.vehicles.filter(
        (vehicle: IVehicles, index: number) =>
          index < limit * num && index >= limit * (num - 1) && vehicle
      )
    );
  };

  return (
    <ContainerPageStyle>
      <HomeStyle>
        <TitleStyle>Vehicles</TitleStyle>
        <ContainerListStyle>
          <SortLine />
          <ListCardStyle>
            {listVehicles &&
              listVehicles.map((item, index) => (
                <CardVehicles key={index} vehicles={item} page={nowPage} />
              ))}
          </ListCardStyle>
          {listVehicles && (
            <Pagination
              className="pagination"
              onChange={(_, num) => onChangePage(num)}
              count={Math.ceil(data.data.vehicles.length / limit)}
              page={nowPage}
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/?page=${item.page}`}
                  {...item}
                />
              )}
            />
          )}
        </ContainerListStyle>
      </HomeStyle>
    </ContainerPageStyle>
  );
};

export default Home;
