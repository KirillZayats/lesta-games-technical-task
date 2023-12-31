import { useEffect, useState } from "react";
import { ContainerPageStyle } from "../styles/AppStyled";
import { useAction } from "../hooks/useAction";
import { IVehicles } from "../additionally/interfaces";
import CardVehicles from "../components/home/CardVehicles";
import SortLine from "../components/home/SortLine";
import { Pagination, PaginationItem } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FilterLine from "../components/home/FilterLine";
import { userTypeSelector } from "../hooks/useTypeSelector";
import {
  ContainerListStyle,
  ListCardStyle,
  HomeStyle,
  TitleStyle,
  MessageStyle,
} from "../styles/pages/HomeStyled";
import Error from "./Error";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { useData, isLoading, startData, errorMessage } = userTypeSelector((state: any) => state.data);
  const { url } = userTypeSelector((state: any) => state.page);
  const { sortData, setUrl, initData } = useAction();

  const [listVehicles, setListVehicles] = useState<IVehicles[]>();
  const [nowPage, setNowPage] = useState<number>(
    parseInt(location.search.split("=")[1]) || 1
  );
  const [typeSort, setTypeSort] = useState<string>("");
  const [isStatusPage, setIsStatusPage] = useState<boolean>(true);
  const limit = 50;

  useEffect(() => {
    sortData(typeSort);
  }, [typeSort]);

  useEffect(() => {
    if (url === "/") {
      setIsStatusPage(true);
      setNowPage(1);
    }
    initData();
  }, [url]);

  useEffect(() => {
    getDataPage(useData);
  }, [isLoading, useData]);

  useEffect(() => {
    if (
      location.search &&
      (Number.isNaN(parseInt(location.search.split("=")[1])) ||
        parseInt(location.search.split("=")[1]) < 1 ||
        parseInt(location.search.split("=")[1]) >
          Math.ceil(useData.length / limit))
    ) {
      setIsStatusPage(false);
      setUrl("/*");
    }
  }, [location]);

  useEffect(() => {
    getDataPage(useData);
    if (
      location.search &&
      parseInt(location.search.split("=")[1]) > 0 &&
      parseInt(location.search.split("=")[1]) <=
        Math.ceil(useData.length / limit)
    ) {
      if (`?page=${nowPage}` === "?page=1") navigate(`?page=1`);
    }
  }, [nowPage]);

  const getDataPage = (data: Array<IVehicles>): void => {
    setListVehicles(
      data.filter(
        (vehicle: IVehicles, index: number) =>
          index < limit * nowPage && index >= limit * (nowPage - 1) && vehicle
      )
    );
  };

  const onChangePage = (num: number) => {
    setNowPage(num);
    window.scrollTo(0, 0);
  };

  return isStatusPage ? (
    <ContainerPageStyle>
      <HomeStyle>
        <TitleStyle>Vehicles</TitleStyle>
        <ContainerListStyle>
          <FilterLine setNowPage={setNowPage} />
          <SortLine typeSort={typeSort} setTypeSort={setTypeSort} />
          <ListCardStyle>
            {listVehicles &&
              listVehicles.map((item, index) => (
                <CardVehicles
                  key={index}
                  vehicles={item}
                  page={nowPage}
                  listVehicles={listVehicles}
                />
              ))}
          </ListCardStyle>
          {listVehicles && listVehicles.length > 0 && (
            <Pagination
              className="pagination"
              onChange={(_, num) => onChangePage(num)}
              count={Math.ceil(useData.length / limit)}
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
          {errorMessage ? (
            <MessageStyle>
              {errorMessage}
            </MessageStyle>
          ) : (
            listVehicles && listVehicles.length === 0 &&  <MessageStyle>
            There are no matches with the specified filter combination
          </MessageStyle>
          )}
        </ContainerListStyle>
      </HomeStyle>
    </ContainerPageStyle>
  ) : (
    <Error errorMessage="404 - No data" />
  );
};

export default Home;
