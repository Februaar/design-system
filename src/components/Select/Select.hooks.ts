import { useState, useEffect } from "react";

export const useSelect = ({ value }: { value?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");

  useEffect(() => {
    if (value) {
      setOption(value);
    }
  }, [value]);

  const openSelect = () => {
    setIsOpen(true);
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  return { isOpen, option, openSelect, closeSelect, setOption };
};
