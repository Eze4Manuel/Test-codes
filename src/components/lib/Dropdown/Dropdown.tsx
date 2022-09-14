import type { FC } from 'react';
import Select from 'react-select';

import styles from './Dropdown.module.scss';
import type DropdownProps from './Dropdown.props';

const Dropdown: FC<DropdownProps> = ({
  options,
  label,
  defaultValue,
  onChange,
  disabled = false,
}) => {
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      outline: 'none',
      border: 'none',
      borderBottom: '1px solid #686868',
      backgroundColor: 'transparent',
    }),

    control: (provided: any) => ({
      ...provided,
      outline: 'none',
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    }),

    valueContainer: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
      color: '#68686',
      padding: 0,
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected && 'white',
      background: state.isSelected && '#686868',
      paddingLeft: '5px',
      paddingRight: '5px',
    }),
  };

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <Select
        isDisabled={disabled}
        options={options}
        styles={customStyles}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Dropdown;
