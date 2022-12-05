import './Dropdown3.module.scss';

import type { FC } from 'react';
import Select from 'react-select';

import type Dropdown3Props from './Dropdown3.props';

const Dropdown3: FC<Dropdown3Props> = ({
  options,
  defaultValue,
  className,
  ...rest
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      color: 'white',
      outline: 'none',
      border: ' 1.43745px solid rgba(104, 104, 104, 0.5)',
      boxShadow: 'none',
      cursor: 'pointer',
      borderRadius: '10px',
      fontWeight: 600,
    }),

    options: (provided: any) => ({
      ...provided,
      textAlign: 'center',
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: '#686868',
      textAlign: 'center',
    }),

    menu: (provided: any) => ({
      ...provided,
      textAlign: 'center',
    }),

    menuList: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: 'grey',
      textAlign: 'center',
    }),
  };

  return (
    <div className={`${className}`}>
      <Select
        options={options}
        styles={customStyles}
        placeholder={
          <span className="flex w-max font-[400]">{defaultValue}</span>
        }
        {...rest}
      />
    </div>
  );
};

export default Dropdown3;
