import styled from "styled-components";
import Icon from "../Icon";

const SortLineStyle = styled.section`
  display: flex;
  flex-direction: row;
  height: 50px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  text-align: center;
  cursor: pointer;
`;

const FieldNationStyle = styled.div`
  height: 100%;
  width: 120px;
  border-right: 1px solid ${({ theme }) => theme.colors.HALF_TEXT_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;



const FieldTypeStyle = styled.div`
  width: 50px;
  border-right: 1px solid ${({ theme }) => theme.colors.HALF_TEXT_COLOR};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 5px;
`;

const FieldLevelStyle = styled.div`
  width: 50px;
  border-right: 1px solid ${({ theme }) => theme.colors.HALF_TEXT_COLOR};
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;

`;

const FieldNameStyle = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;

`;

const SvgSortNation = styled(Icon)`
  width: 32px;
  height: 32px;
`;

const SvgType = styled(Icon)`
  width: 25px;
  height: 18px;
`;

const TextSortStyle = styled.span``;

const IconNation: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <SvgSortNation viewBox="0 0 13.48 13.48" className={className}>
    <path
      fill="#8C8C7C"
      d="M13.48 6.74A6.74 6.74 0 1 1 6.739 0a6.74 6.74 0 0 1 6.741 6.74zM3.238 6.409a9.582 9.582 0 0 1 .47-2.682l-2.252-.002a6.043 6.043 0 0 0-.79 2.684h2.572zm3.173-2.683H4.404a8.944 8.944 0 0 0-.508 2.683h2.515V3.726zm0-3.06a7.274 7.274 0 0 0-1.739 2.395h1.739V.666zM1.892 3.061h2.064c.348-.83.825-1.6 1.375-2.237-1.42.321-2.635 1.177-3.439 2.237zm10.922 3.348a6.043 6.043 0 0 0-.79-2.684l-2.252.003c.274.835.438 1.738.47 2.682h2.572zm-5.745 0h2.515a8.851 8.851 0 0 0-.508-2.683H7.069v2.683zm0-3.348h1.739A7.274 7.274 0 0 0 7.069.666v2.395zM8.149.824a8.463 8.463 0 0 1 1.375 2.237h2.064c-.804-1.06-2.02-1.916-3.439-2.237zM.666 7.071c.052.973.333 1.885.79 2.684l2.252-.002a9.66 9.66 0 0 1-.47-2.682H.666zm5.745 0H3.896c.034.945.209 1.846.508 2.684h2.007V7.071zm0 3.348H4.672a7.278 7.278 0 0 0 1.739 2.396v-2.396zm-1.08 2.238a8.479 8.479 0 0 1-1.375-2.237H1.892c.804 1.06 2.019 1.916 3.439 2.237zm4.911-5.586a9.588 9.588 0 0 1-.47 2.682l2.252.002c.457-.799.738-1.71.789-2.684h-2.571zM7.069 9.755h2.007a8.895 8.895 0 0 0 .509-2.684H7.069v2.684zm0 3.06a7.254 7.254 0 0 0 1.739-2.396H7.069v2.396zm4.52-2.396H9.524c-.348.83-.825 1.6-1.375 2.237 1.419-.32 2.635-1.176 3.44-2.237z"
    />
  </SvgSortNation>
);

const IconType: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <SvgType viewBox="0 0 20.995 15.557" className={className}>
    <path
      fill="#8C8C7C"
      d="M-9.21 7.778a6.74 6.74 0 1 1-13.481-.001 6.74 6.74 0 0 1 13.481.001zm-10.242-.331a9.588 9.588 0 0 1 .47-2.682l-2.252-.002a6.043 6.043 0 0 0-.79 2.684h2.572zm3.173-2.683h-2.007a8.925 8.925 0 0 0-.508 2.684h2.515V4.764zm0-3.06A7.268 7.268 0 0 0-18.018 4.1h1.739V1.704zm-4.52 2.396h2.064c.348-.83.825-1.6 1.375-2.237-1.419.32-2.634 1.177-3.439 2.237zm10.923 3.347a6.043 6.043 0 0 0-.79-2.684l-2.252.002c.274.835.438 1.738.47 2.682h2.572zm-5.745 0h2.515a8.87 8.87 0 0 0-.508-2.684h-2.007v2.684zm0-3.347h1.739a7.292 7.292 0 0 0-1.739-2.396V4.1zm1.08-2.238a8.479 8.479 0 0 1 1.375 2.237h2.064c-.804-1.059-2.02-1.916-3.439-2.237zm-7.483 6.247c.052.973.333 1.886.79 2.685l2.252-.002a9.668 9.668 0 0 1-.47-2.683h-2.572zm5.745 0h-2.515c.034.945.209 1.847.508 2.685h2.007V8.109zm0 3.349h-1.739a7.278 7.278 0 0 0 1.739 2.396v-2.396zm-1.08 2.237a8.479 8.479 0 0 1-1.375-2.237h-2.064c.804 1.061 2.019 1.917 3.439 2.237zm4.911-5.586a9.595 9.595 0 0 1-.47 2.683l2.252.002a6.03 6.03 0 0 0 .789-2.685h-2.571zm-3.173 2.685h2.007a8.895 8.895 0 0 0 .509-2.685h-2.516v2.685zm0 3.06a7.254 7.254 0 0 0 1.739-2.396h-1.739v2.396zm4.519-2.396h-2.064c-.348.83-.825 1.6-1.375 2.237 1.419-.32 2.635-1.176 3.439-2.237z"
    />
    <path
      fill="#5E5E56"
      d="M0 3.434h7.62v7.619H0zm14.766 3.542l6.229-.001-6.228 6.231-6.231-6.229z"
    />
    <path fill="#8C8C7C" d="M16.233 7.778l-7.07 7.072-7.074-7.072L9.16.706z" />
    <path
      fill="#302F2D"
      d="M9.161 1.414l6.365 6.364-6.363 6.364-6.365-6.364 6.363-6.364m0-1.414l-.707.707-6.363 6.364-.707.707.707.707 6.365 6.364.707.707.707-.706 6.363-6.364.707-.707-.707-.707L9.868.707 9.161 0z"
    />
  </SvgType>
);

export {
    SortLineStyle, 
    IconType,
    IconNation, 
    TextSortStyle,
    FieldLevelStyle,
    FieldNameStyle,
    FieldNationStyle,
    FieldTypeStyle,  
}