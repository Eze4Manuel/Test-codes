import './Dropdown2.module.scss';

import type { FC } from 'react';
import Select from 'react-select';

import type Dropdown2Props from './Dropdown2.props';

const Dropdown2: FC<Dropdown2Props> = ({ options }) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#101318',
      color: 'white',
      outline: 'none',
      border: ' 1.43745px solid rgba(104, 104, 104, 0.5);',
      boxShadow: 'none',
      cursor: 'pointer',
      borderRadius: '47.915px',
      fontWeight: 600,
    }),

    options: (provided: any) => ({
      ...provided,
      textAlign: 'center',
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
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

    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: 'white',
      position: 'relative',
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: 'white',
      textAlign: 'center',
    }),
  };

  return (
    <div className="w-max md:w-[220px]">
      <Select
        options={options}
        styles={customStyles}
        placeholder={
          <span className="mx-auto flex w-max items-center">Select Campus</span>
        }
      />
    </div>
  );
};

export default Dropdown2;
