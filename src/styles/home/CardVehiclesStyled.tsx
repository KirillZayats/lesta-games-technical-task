import styled from "styled-components";
import { device } from "../../styles/media/MediaQueryStyled";

const LabelStyle = styled.span`
  position: relative;
`;

const LabelTitleStyle = styled.span`
  position: relative;
`;

const TextStyle = styled.p`
  font-size: 11px;
`;

const TextDescriptionStyle = styled.p`
  position: absolute;

  @media ${device.mobileS} {
    font-size: 12px;
    max-width: calc(100% - 20px);
  }

  @media ${device.mobileM} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 8px;
    max-width: 310px;
    left: 405px;
  }

  @media ${device.tabletS} {
    font-size: 8px;
    max-width: 300px;
    left: 445px;
  }

  @media ${device.laptop} {
    font-size: 10.5px;
    max-width: 490px;
    left: 480px;
  }

  @media ${device.desktop} {
    font-size: 11px;
    max-width: 630px;
    left: 500px;
  }
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
  position: relative;
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
    @media ${device.mobileS} {
      height: 40px;
      gap: 20px;
      margin: 10px auto;
    }

    @media ${device.tablet} {
      height: 61px;
      gap: 30px;
      margin: 20px auto;
    }
  }

  .card-active {
    height: 150px;
    gap: 0px;

    @media ${device.mobileS} {
      height: 350px;
      margin: 15px auto;
    }

    @media ${device.tablet} {
      height: 150px;
      margin: 5px auto;
    }
  }

  .nation-no-active {
    top: 0;
    @media ${device.mobileS} {
      width: 60px;
    }

    @media ${device.tablet} {
      width: 100px;
    }
  }

  .nation-active {
    @media ${device.mobileS} {
      width: 140px;
      top: -125px;
    }

    @media ${device.mobileM} {
      width: 150px;
      top: -125px;
    }

    @media ${device.tablet} {
      width: 230px;
      top: 0;
    }
  }

  .level-no-active {
    width: 25px;
    font-size: 22px;
    left: 0px;
    top: 0px;
    text-align: center;
    @media ${device.mobileS} {
      font-size: 16px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
  }

  .level-active {
    width: 25px;
    text-align: center;
    @media ${device.mobileS} {
      left: 0px;
      top: -134px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
      left: 5px;
      top: -129px;
    }

    @media ${device.tablet} {
      left: -10px;
      top: -11px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 3px;
    }
  }

  .type-no-active {
    width: 30px;
    left: 0;
    top: 0;
    opacity: 1;

    @media ${device.mobileS} {
      left: -10px;
    }

    @media ${device.tablet} {
      left: 0;
    }
  }
  .type-active {
    opacity: 0;
  }

  .view-no-active {
    top: 0px;
    @media ${device.mobileS} {
      width: 0px;
      left: -120px;
    }

    @media ${device.tablet} {
      width: 80px;
      left: 0px;
    }
  }

  .view-active {
    @media ${device.mobileS} {
      width: 120px;
      left: -170px;
      top: -115px;
    }

    @media ${device.mobileM} {
      width: 150px;
      left: -190px;
      top: -120px;
    }

    @media ${device.tablet} {
      width: 210px;
      left: -270px;
      top: 0px;
    }
  }

  .name-no-active {
    top: 0;
    @media ${device.mobileS} {
      font-size: 14px;
      min-width: 125px;
      left: -5px;
    }

    @media ${device.tablet} {
      font-size: 21px;
      left: 0px;
    }
  }

  .name-active {
    @media ${device.mobileS} {
      font-size: 13px;
      left: -170px;
      top: -150px;
      min-width: 175px;
    }

    @media ${device.mobileM} {
      min-width: 210px;
      font-size: 14px;
      left: -196px;
      top: -150px;
    }

    @media ${device.mobileL} {
      min-width: 240px;
    }

    @media ${device.tablet} {
      top: -40px;
      left: -280px;
      min-width: auto;
    }

    @media ${device.tabletS} {
      left: -277px;
      font-size: 17px;
    }
    @media ${device.laptop} {
      font-size: 19.5px;
    }

    @media ${device.desktop} {
      font-size: 21px;
    }
  }

  .level_name-no-active {
    opacity: 0;
    position: absolute;

    @media ${device.mobileS} {
      top: 10px;
      left: 100px;
    }

    @media ${device.tablet} {
      top: 20px;
    }
  }

  .level_name-active {
    opacity: 1;
    position: absolute;
    z-index: 2;

    @media ${device.mobileS} {
      left: 125px;
      top: 35px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
      left: 138px;
      top: 37px;
    }

    @media ${device.tablet} {
      left: 212px;
      top: 55px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 216px;
    }
  }

  .type_name-no-active {
    opacity: 0;
    position: absolute;

    @media ${device.mobileS} {
      top: 10px;
      left: 100px;
    }

    @media ${device.tablet} {
      top: 40px;
    }
  }

  .type_name-active {
    opacity: 1;
    position: absolute;
    z-index: 2;
    @media ${device.mobileS} {
      left: 125px;
      top: 55px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      left: 137px;
      font-size: 14px;
    }

    @media ${device.tablet} {
      left: 212px;
      top: 80px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 216px;
    }
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
    @media ${device.mobileS} {
      top: 55px;
      left: 165px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
      top: 55px;
      left: 180px;
    }
    @media ${device.tablet} {
      top: 81px;
      left: 255px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 265px;
    }
  }

  .nation_name-no-active {
    width: 0;
    opacity: 0;
    position: absolute;

    @media ${device.mobileS} {
      top: 10px;
      left: 100px;
    }

    @media ${device.tablet} {
      left: 105px;
      top: 41px;
    }
  }

  .nation_name-active {
    opacity: 1;
    position: absolute;
    width: auto;
    @media ${device.mobileS} {
      left: 125px;
      top: 76px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
      left: 138px;
      top: 75px;
    }
    @media ${device.tablet} {
      left: 213px;
      top: 105px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 217px;
    }
  }

  .nation_title-no-active {
    width: 0;
    opacity: 0;
    position: absolute;

    @media ${device.mobileS} {
      top: 10px;
      left: 100px;
    }

    @media ${device.tablet} {
      left: 105px;
      top: 41px;
    }
  }

  .nation_title-active {
    opacity: 1;
    position: absolute;
    width: auto;

    @media ${device.mobileS} {
      left: 175px;
      top: 76px;
      font-size: 13px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
      left: 192px;
      top: 75px;
    }
    @media ${device.tablet} {
      left: 265px;
      top: 105px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      left: 280px;
    }
  }

  .description-no-active {
    opacity: 0;
    top: -20px;

    @media ${device.tablet} {
      left: 405px;
    }

    @media ${device.tabletS} {
      left: 445px;
    }

    @media ${device.laptop} {
      left: 480px;
    }

    @media ${device.desktop} {
      left: 500px;
    }
  }

  .description-active {
    opacity: 1;
    @media ${device.mobileS} {
      top: 100px;
      left: 10px;
    }

    @media ${device.tablet} {
      top: 30px;
      left: 405px;
    }

    @media ${device.tabletS} {
      left: 445px;
    }

    @media ${device.laptop} {
      left: 480px;
    }

    @media ${device.desktop} {
      left: 500px;
    }
  }
`;

export {
  ElementListStyle,
  ImageNationStyle,
  ImageTypeStyle,
  ImageViewStyle,
  CardVehiclesStyle,
  TextStyle,
  LabelStyle,
  TextDescriptionStyle,
  LabelTitleStyle,
};
