import ArrowUpSvg from "../../assets/arrow-up-icon.svg";
import ArrowDownSvg from "../../assets/arrow-down-icon.svg";

export const ArrowUpIcon = () => {
  return (
    <i>
      <img src={ArrowUpSvg} alt="위로 버튼" />
    </i>
  );
};

export const ArrowDownIcon = () => {
  return (
    <i>
      <img src={ArrowDownSvg} alt="아래로 버튼" />
    </i>
  );
};
