import './Dropdown3.module.scss';

import type { FC } from 'react';
import Select from 'react-select';

import type Dropdown3Props from './Dropdown3.props';

const Dropdown3: FC<Dropdown3Props> = ({ options, defaultValue, ...rest }) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      color: 'white',
      outline: 'none',
      border: ' 1.43745px solid rgba(104, 104, 104, 0.5);',
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

    placeholder: (provided: any) => ({
      ...provided,
      color: 'grey',
      textAlign: 'center',
    }),
  };

  return (
    <div className="md:w-[220px]">
      <Select
        options={options}
        styles={customStyles}
        placeholder={
          <span className="mx-auto flex w-max items-center">
            {defaultValue}
          </span>
        }
        {...rest}
      />
    </div>
  );
};

export default Dropdown3;
