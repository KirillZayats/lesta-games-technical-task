import IconArrow from "../styles/Icon";
import { styled } from "styled-components";

const Svg = styled(IconArrow)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.colors.TEXT_COLOR};
`;

const IconArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <Svg viewBox="0 0 32 32" className={className}>
    <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
  </Svg>
);

const DownUpStyle = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  bottom: -50px;
  opacity: 0;
  transition: all 0.4s ease-in;
  right: 0px;

  &:hover {
    background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  }
`;

export { DownUpStyle, IconArrowUp };
