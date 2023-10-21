import { styled } from "styled-components";

const FooterStyle = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  width: 100%;
  text-align: center;
`;
const TextFooterStyle = styled.p`
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  padding: 40px;
`;

export { FooterStyle, TextFooterStyle };
