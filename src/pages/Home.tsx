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
import { TypeSort } from "../additionally/constants";
import FilterLine from "../components/home/FilterLine";

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
margin-top: 20px;
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
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading, mapSortData } = useSelector((state: any) => state.data);
  const [listVehicles, setListVehicles] = useState<IVehicles[]>();
  const [nowPage, setNowPage] = useState<number>(
    parseInt(location.search.split("=")[1]) || 1
  );
  const [valuesFilter, setValuesFilter] = useState<string[]>([]);

  const [typeSort, setTypeSort] = useState<string>("");
  const limit = 50;

  useEffect(() => {
    //???
  }, [valuesFilter])

  useEffect(() => {
   
    switch (typeSort) {
      case TypeSort.NATION_ASC:
        getDataPage(mapSortData.get(TypeSort.NATION_ASC));
        break;
      case TypeSort.NATION_DESC:
        getDataPage(mapSortData.get(TypeSort.NATION_DESC));
        break;
      case TypeSort.TYPE_ASC:
        getDataPage(mapSortData.get(TypeSort.TYPE_ASC));
        break;
      case TypeSort.TYPE_DESC:
        getDataPage(mapSortData.get(TypeSort.TYPE_DESC));
        break;
      case TypeSort.LEVEL_ASC:
        getDataPage(mapSortData.get(TypeSort.LEVEL_ASC));
        break;
      case TypeSort.LEVEL_DESC:
        getDataPage(mapSortData.get(TypeSort.LEVEL_DESC));
        break;
      case TypeSort.NAME_ASC:
        getDataPage(mapSortData.get(TypeSort.NAME_ASC));
        break;
      case TypeSort.NAME_DESC:
        getDataPage(mapSortData.get(TypeSort.NAME_DESC));
        break;
      default:
        break;
    }
  }, [typeSort]);

  useEffect(() => {
    getDataPage(data);
  }, [isLoading]);

  const getDataPage = (data: Array<IVehicles>): void => {
    setListVehicles(
      data.filter(
        (vehicle: IVehicles, index: number) =>
          index < limit * nowPage && index >= limit * (nowPage - 1) && vehicle
      )
    );
  }

  useEffect(() => {
    if (
      location.search &&
      (Number.isNaN(parseInt(location.search.split("=")[1])) ||
        parseInt(location.search.split("=")[1]) < 1 ||
        parseInt(location.search.split("=")[1]) >
          data.length / limit)
    ) {
      navigate(`*`);
    }
  }, [useLocation]);

  useEffect(() => {
    typeSort ? getDataPage(mapSortData.get(typeSort)) : getDataPage(data)
  }, [nowPage])

  const onChangePage = (num: number) => {
    setNowPage(num);
  };

  return (
    <ContainerPageStyle>
      <HomeStyle>
        <TitleStyle>Vehicles</TitleStyle>
        <ContainerListStyle>
          <FilterLine valuesFilter={valuesFilter} setValuesFilter={setValuesFilter}/>
          <SortLine typeSort={typeSort} setTypeSort={setTypeSort} />
          <ListCardStyle>
            {listVehicles &&
              listVehicles.map((item, index) => (
                <CardVehicles key={index} vehicles={item} page={nowPage} typeSort={typeSort} />
              ))}
          </ListCardStyle>
          {listVehicles && (
            <Pagination
              className="pagination"
              onChange={(_, num) => onChangePage(num)}
              count={Math.ceil(data.length / limit)}
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
