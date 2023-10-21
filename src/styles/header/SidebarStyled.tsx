import { styled } from "styled-components";

const SidebarStyle = styled.label`
  display: block;
  width: 24px;
  height: 24px;
  z-index: 2;
  top: 0px;
  cursor: pointer;
  transition: all 0.5s ease-in;
`;

const SidebarElementsstyle = styled.label`
  width: 22px;
  height: 12px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
  margin: 6px auto;
  cursor: pointer;
`;

const InputCheckBoxStyle = styled.input`
  display: none;
`;

const SidebarElementStyle = styled.span`
  display: block;
  position: relative;
  transition: 0.3s ease-in;
  left: 0px;
  top: 0px;
  height: 2px;
  background: ${({ theme }) => theme.colors.TEXT_COLOR};
  opacity: 1;
  &.top {
    width: 22px;
  }
  &.bottom {
    width: 15px;
  }
`;

export {
  SidebarStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
  InputCheckBoxStyle,
};
