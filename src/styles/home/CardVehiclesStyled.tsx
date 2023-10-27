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
    width: 25px;
    font-size: 22px;
    left: 0px;
    top: 0px;
    text-align: center;
  }
  .level-active {
    width: 25px;
    left: 10px;
    top: -10px;
    text-align: center;
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
  }

  .name-no-active {
    left: 0;
    font-size: 22px;
    top: 0;
  }
  .name-active {
    left: -277px;
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
    z-index: 2;
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
    z-index: 2;
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

export {
    ElementListStyle,
    ImageNationStyle,
    ImageTypeStyle,
    ImageViewStyle,
    CardVehiclesStyle,
    TextStyle,
    LabelStyle
}