import { CSSProperties } from "react";
import { css } from "styled-components";
import theme from "../../styles";
import { SelectProps, SelectSize } from "./Select";

interface SelectSizeProps {
  fontSize: string;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}

const selectTypebySize: { [key in SelectSize]: SelectSizeProps } = {
  sm: {
    width: "180px",
    height: "44px",
    fontSize: theme.sizes.fontSize.sm,
  },
  md: {
    width: "240px",
    height: "50px",
    fontSize: theme.sizes.fontSize.md,
  },
  lg: {
    width: "280px",
    height: "56px",
    fontSize: theme.sizes.fontSize.lg,
  },
};

export const getSelectStyles = ({
  size,
}: SelectProps): ReturnType<typeof css> => {
  const sizeProps = size ? selectTypebySize[size] : null;

  return css`
    width: ${sizeProps?.width};
    height: ${sizeProps?.height};
    font-size: ${sizeProps?.fontSize};
  `;
};
