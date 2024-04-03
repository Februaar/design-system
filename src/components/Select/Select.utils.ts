import { CSSProperties } from "react";
import { css } from "styled-components";
import theme from "../../styles";
import { SelectProps, SelectSize } from "./Select";

interface SelectSizeProps {
  fontSize: string;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}

const SelectTypebySize: { [key in SelectSize]: SelectSizeProps } = {
  sm: {
    ...theme.sizes.select.sm,
  },
  md: {
    ...theme.sizes.select.md,
  },
  lg: {
    ...theme.sizes.select.lg,
  },
};

export const getSelectStyles = ({
  size,
}: SelectProps): ReturnType<typeof css> => {
  const sizeProps = size ? SelectTypebySize[size] : null;

  return css`
    width: ${sizeProps?.width};
    height: ${sizeProps?.height};
    font-size: ${sizeProps?.fontSize};
  `;
};
