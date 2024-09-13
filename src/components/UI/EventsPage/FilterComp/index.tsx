'use client';
import React, {
  useState,
  useEffect,
  MouseEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import { DropDownCtn, DropButton, DropBox, DropBoxItem, Check } from './styles';
import { Option } from '../../../../../typings';

interface FilterCompProps {
  title: string;
  options: Option[];
  // setMonths: Dispatch<SetStateAction<string[]>>;
  selectedOptions: any;
  setSelectedOptions: Dispatch<SetStateAction<Option[]>>;
}

const FilterComp: React.FC<FilterCompProps> = ({
  title,
  options,
  // setMonths,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleOptionClick = (option: Option) => {
    const isSelected = selectedOptions.some(
      (selected: { value: string }) => selected.value === option.value
    );

    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter(
          (selected: { value: string }) => selected.value !== option.value
        )
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOutsideClick = (event: { target: Element }) => {
    const targetElement = event.target as Element;
    if (isDropDownOpen && !targetElement.closest('.drop-down-container')) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick as any);
    return () => {
      document.removeEventListener('click', handleOutsideClick as any);
    };
  }, [isDropDownOpen]);

  return (
    <div className="drop-down-container">
      <DropDownCtn>
        <DropButton onClick={toggleDropDown}>
          {selectedOptions.length > 0
            ? selectedOptions[selectedOptions.length - 1].label
            : title}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.73423 5.83456C4.88425 5.68459 5.0877 5.60033 5.29983 5.60033C5.51196 5.60033 5.71541 5.68459 5.86543 5.83456L8.49983 8.46896L11.1342 5.83456C11.208 5.75815 11.2963 5.69721 11.3939 5.65528C11.4915 5.61335 11.5965 5.59129 11.7027 5.59036C11.8089 5.58944 11.9143 5.60968 12.0126 5.64991C12.1109 5.69013 12.2002 5.74953 12.2753 5.82465C12.3505 5.89976 12.4099 5.98908 12.4501 6.0874C12.4903 6.18572 12.5106 6.29106 12.5096 6.39728C12.5087 6.50351 12.4866 6.60848 12.4447 6.70609C12.4028 6.80369 12.3418 6.89197 12.2654 6.96576L9.06543 10.1658C8.91541 10.3157 8.71196 10.4 8.49983 10.4C8.2877 10.4 8.08425 10.3157 7.93423 10.1658L4.73423 6.96576C4.58425 6.81574 4.5 6.61229 4.5 6.40016C4.5 6.18803 4.58425 5.98458 4.73423 5.83456Z"
              fill="white"
            />
          </svg>
        </DropButton>
        {isDropDownOpen && (
          <DropBox>
            {options.map((month) => (
              <DropBoxItem
                key={month.value}
                onClick={() => handleOptionClick(month)}
              >
                <Check
                  className={
                    selectedOptions.some(
                      (selected: { value: string }) =>
                        selected.value === month.value
                    )
                      ? 'checked'
                      : ''
                  }
                />
                <p>{month.label}</p>
              </DropBoxItem>
            ))}
          </DropBox>
        )}
      </DropDownCtn>
    </div>
  );
};

export default FilterComp;
