import React, { useEffect, useState } from "react";
import { IPropsVehicles } from "../../additionally/interfaces";
import styled from "styled-components";

const LabelStyle = styled.span`
  position: relative;
`;

const TextStyle = styled.p`
  font-size: 11px;
`;

const CardVehiclesStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  transition: 0.3s ease-out;
`;

const ImageNationStyle = styled.img`
  object-fit: contain;
`;

const ImageViewStyle = styled.img`
  object-fit: contain;
  position: relative;
`;

const ImageTypeStyle = styled.img`
  object-fit: contain;
  position: relative;
`;

const ElementListStyle = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.HALF_TEXT_COLOR};
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  }

  .card-no-active {
    height: 61px;
    gap: 30px;
    margin: 20px auto;

  }
  .card-active {
    height: 150px;
    gap: 0px;
    margin: 5px auto;
  }

  .nation-no-active {
    width: 100px;
  }
  .nation-active {
    width: 230px;
  }

  .level-no-active {
    font-size: 22px;
    left: 0px;
    top: 0px;
  }
  .level-active {
    left: 10px;
    top: -10px;
  }

  .type-no-active {
    width: 30px;
    left: 0;
    top: 0;
    opacity: 1;

  }
  .type-active {
    opacity: 0;
  }

  .view-no-active {
    width: 80px;
    left: 0px;
  }
  .view-active {
    width: 210px;
    left: -260px;
    /* position: absolute; */
  }

  .name-no-active {
    left: 0;
    font-size: 22px;
    top: 0;
  }
  .name-active {
    left: -260px;
    font-size: 22px;
    top: -40px;
  }

  .level_name-no-active {
    opacity: 0;
    position: absolute;
    left: 100px;
    top: 20px;
  }

  .level_name-active {
    opacity: 1;
    position: absolute;
    left: 216px;
    top: 55px;
  }

  .type_name-no-active {
    opacity: 0;
    position: absolute;
    left: 100px;
    top: 40px;
  }
  .type_name-active {
    opacity: 1;
    position: absolute;
    left: 216px;
    top: 80px;
  }

  .type_title-no-active {
    opacity: 0;
    position: absolute;
    left: 100px;
    top: 30px;
  }

  .type_title-active {
    opacity: 1;
    position: absolute;
    left: 265px;
    top: 81px;
  }

  .nation_name-no-active {
    width: 0;
    opacity: 0;
    position: absolute;
    left: 105px;
    top: 41px;
  }

  .nation_name-active {
    opacity: 1;
    position: absolute;
    width: auto;
    left: 215px;
    top: 105px;
  }

  .nation_title-no-active {
    width: 0;
    opacity: 0;
    position: absolute;
    left: 105px;
    top: 41px;
  }

  .nation_title-active {
    opacity: 1;
    position: absolute;
    width: auto;
    left: 275px;
    top: 105px;
  }

  .description-no-active {
    height: 0px;
    max-width: 520px;
    opacity: 0;
    position: absolute;
    left: 510px;
    top: -20px;
  }

  .description-active {
    height: 130px;
    max-width: 520px;
    opacity: 1;
    position: absolute;
    left: 510px;
    top: 30px;
  }
`;

const CardVehicles: React.FC<IPropsVehicles> = ({ vehicles, page }) => {
  const [partId, setPartId] = useState<string>('');
  const [card, setCard] = useState<HTMLElement | null>();
  const [name, setName] = useState<HTMLElement | null>();
  const [nation, setNation] = useState<HTMLElement | null>();
  const [view, setView] = useState<HTMLElement | null>();
  const [levelName, setLevelName] = useState<HTMLElement | null>();
  const [level, setLevel] = useState<HTMLElement | null>();
  const [type, setType] = useState<HTMLElement | null>();
  const [typeName, setTypeName] = useState<HTMLElement | null>();
  const [typeTitle, setTypeTitle] = useState<HTMLElement | null>();
  const [nationName, setNationName] = useState<HTMLElement | null>();
  const [nationTitle, setNationTitle] = useState<HTMLElement | null>();
  const [description, setDescription] = useState<HTMLElement | null>();
  useEffect(() => {
    setPartId(vehicles.title.replace(/\<|\>|\(|\)|\.|\s|$/g, ''))    
  }, [vehicles]);

  useEffect(() => {
    setCard(document.getElementById(partId));
    setNation(document.getElementById(`${partId}_${vehicles.nation.name}`));
    setView(document.getElementById(`${partId}_view`));
    setName(document.getElementById(`${partId}_name`));
    setLevelName(document.getElementById(`${partId}_level_name`));
    setLevel(document.getElementById(`${partId}_level`));
    setType(document.getElementById(`${partId}_type`));
    setTypeName(document.getElementById(`${partId}_type_name`));
    setTypeTitle(document.getElementById(`${partId}_type_title`));
    setNationName(document.getElementById(`${partId}_nation_name`));
    setNationTitle(document.getElementById(`${partId}_nation_title`));
    setDescription(document.getElementById(`${partId}_description`));
  }, [partId])

  useEffect(() => {
    deleteView();
  }, [page])

  const clickCard = () => {
    card && card.classList.toggle("card-active");
    card && card.classList.toggle("card-no-active");

    nation && nation.classList.toggle("nation-active");
    nation && nation.classList.toggle("nation-no-active");

    view && view.classList.toggle("view-active");
    view && view.classList.toggle("view-no-active");

    name && name.classList.toggle("name-active");
    name && name.classList.toggle("name-no-active");

    levelName && levelName.classList.toggle("level_name-active");
    levelName && levelName.classList.toggle("level_name-no-active");

    level && level.classList.toggle("level-active");
    level && level.classList.toggle("level-no-active");

    type && type.classList.toggle("type-active");
    type && type.classList.toggle("type-no-active");

    typeName && typeName.classList.toggle("type_name-active");
    typeName && typeName.classList.toggle("type_name-no-active");

    typeTitle && typeTitle.classList.toggle("type_title-active");
    typeTitle && typeTitle.classList.toggle("type_title-no-active");

    nationName && nationName.classList.toggle("nation_name-active");
    nationName && nationName.classList.toggle("nation_name-no-active");

    nationTitle && nationTitle.classList.toggle("nation_title-active");
    nationTitle && nationTitle.classList.toggle("nation_title-no-active");

    description && description.classList.toggle("description-active");
    description && description.classList.toggle("description-no-active");
  };

  const deleteView = () => {
    card && card.classList.remove("card-active");
    card && card.classList.add("card-no-active");

    nation && nation.classList.remove("nation-active");
    nation && nation.classList.add("nation-no-active");

    view && view.classList.remove("view-active");
    view && view.classList.add("view-no-active");

    name && name.classList.remove("name-active");
    name && name.classList.add("name-no-active");

    levelName && levelName.classList.remove("level_name-active");
    levelName && levelName.classList.add("level_name-no-active");

    level && level.classList.remove("level-active");
    level && level.classList.add("level-no-active");

    type && type.classList.remove("type-active");
    type && type.classList.add("type-no-active");

    typeName && typeName.classList.remove("type_name-active");
    typeName && typeName.classList.add("type_name-no-active");

    typeTitle && typeTitle.classList.remove("type_title-active");
    typeTitle && typeTitle.classList.add("type_title-no-active");

    nationName && nationName.classList.remove("nation_name-active");
    nationName && nationName.classList.add("nation_name-no-active");

    nationTitle && nationTitle.classList.remove("nation_title-active");
    nationTitle && nationTitle.classList.add("nation_title-no-active");

    description && description.classList.remove("description-active");
    description && description.classList.add("description-no-active");
  }

  return (
    <ElementListStyle onClick={clickCard}>
      <CardVehiclesStyle id={partId} className="card-no-active">
        <ImageNationStyle
          src={vehicles.nation.icons.large}
          id={`${partId}_${vehicles.nation.name}`}
          className="nation-no-active"
        />
        <LabelStyle
          className="type_name-no-active"
          id={`${partId}_type_name`}
        >
          Type:
        </LabelStyle>
        <ImageTypeStyle
          src={vehicles.type.icons.default}
          className="type-no-active"
          id={`${partId}_type`}
        />
                <LabelStyle
          className="type_title-no-active"
          id={`${partId}_type_title`}
        >
          {vehicles.type.title}
        </LabelStyle>
        <LabelStyle
          className="level_name-no-active"
          id={`${partId}_level_name`}
        >
          Level:
        </LabelStyle>
        <LabelStyle className="level-no-active" id={`${partId}_level`}>
          {vehicles && vehicles.level}
        </LabelStyle>
        <ImageViewStyle
          src={vehicles.icons.medium}
          id={`${partId}_view`}
          className="view-no-active"
        />
        <LabelStyle className="name-no-active" id={`${partId}_name`}>
          {vehicles && vehicles.title}
        </LabelStyle>
        <LabelStyle className="nation_name-no-active" id={`${partId}_nation_name`}>
          Nation:
        </LabelStyle>
        <LabelStyle className="nation_title-no-active" id={`${partId}_nation_title`}>
          {vehicles && vehicles.nation.title}
        </LabelStyle>
        <TextStyle className="description-no-active" id={`${partId}_description`}>
          {vehicles && vehicles.description}
        </TextStyle>
      </CardVehiclesStyle>
    </ElementListStyle>
  );
};

export default CardVehicles;
