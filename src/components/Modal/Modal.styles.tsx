import styled from "styled-components";
import theme from "../../styles"

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${theme.zIndex.overlay};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  z-index: ${theme.zIndex.modal};
`;

export const Header = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  padding: 8px 12px;
`;

export const Body = styled.div`
  width: 240px;
  height: 180px;
  padding: 12px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;
