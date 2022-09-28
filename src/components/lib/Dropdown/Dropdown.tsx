import type { FC } from 'react';
import Select from 'react-select';

import styles from './Dropdown.module.scss';
import type DropdownProps from './Dropdown.props';

const Dropdown: FC<DropdownProps> = ({
  options,
  label,
  disabled = false,
  error,
  helperText,
  onChange,
  ...rest
}) => {
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      outline: 'none',
      border: 'none',
      borderBottom: error
        ? '1px solid rgb(239, 68, 68, 1)'
        : '1px solid #686868',
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
    <div className="w-full">
      <label className={styles.label}>{label}</label>
      <Select
        isDisabled={disabled}
        options={options}
        styles={customStyles}
        onChange={(value: any, action: any) => {
          if (onChange) {
            onChange(value, action);
          }
        }}
        {...rest}
      />
      {helperText && (
        <span className={`text-sm ${error ? 'text-red-500' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
