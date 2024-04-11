import styled from "styled-components";
import theme from "../../styles";
import { SelectProps } from "./Select";
import { getSelectStyles } from "./Select.utils";

export const SelectContainer = styled.div<SelectProps>`
  ${getSelectStyles}
  position: relative;
  border-radius: 8px;
  color: #000;
  background-color: transparent;

  &: disabled {
    cursor: not-allowed;
  }
`;

export const TriggerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 1px solid ${theme.colors.serenity[300]};
  border-radius: 8px;
  background-color: transparent;
`;

export const SelectedOption = styled.div`
  padding: 8px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ArrowIconWrapper = styled.div`
  height: 24px;
`;

export const DropDown = styled.ul`
  position: absolute;
  margin: 0;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px 0;
  border-radius: 8px;
  width: 100%;
  max-height: 220px;
  background-color: #fff;
  box-shadow: 0px 8px 12px rgba(38, 50, 56, 0.1);
  list-style: none;
  overflow: hidden;
  overflow-y: auto;
  z-index: ${theme.zIndex.popover};
`;

export const OptionLabel = styled.div`
  padding: 8px 16px;
  color: #888888;
`;

export const OptionItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.serenity[300]};
  }
`;
