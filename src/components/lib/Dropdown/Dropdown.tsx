import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { arrowDown, arrowUp } from '@/public/assets/icons/inputs/arrows';

import styles from './Dropdown.module.scss';
import type DropdownProps from './Dropdown.props';

const Dropdown: FC<DropdownProps> = ({
  currentValue,
  list,
  labelText,
  onClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false); // local state to control dropdown
  const [selectedOption, setSelectedOption] = useState(0);
  const listBoxRef = useRef(null);

  useEffect(() => {
    const handleCloseListBox = (e: any) => {
      // listens for clicks outside the listbox
      if (listBoxRef.current !== null) {
        const listBox = listBoxRef.current as HTMLElement;
        if (!listBox.contains(e.target)) {
          setOpenDropdown(false);
        }
      }
    };

    document.addEventListener('click', handleCloseListBox);

    return () => {
      document.removeEventListener('click', handleCloseListBox);
    };
  });

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    onClick(e); // onClick event on the parent component
    setOpenDropdown(false);
    setSelectedOption(index);
  };

  const handleKeyDown = (e: any, index: number) => {
    // for accessibility
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onClick(e); // onClick event on the parent component
        setOpenDropdown(false);
        setSelectedOption(index);
        break;
      default:
        break;
    }
  };

  const handleKeyListDown = (e: any) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setOpenDropdown(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : list.length - 1
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption === list.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative w-full" ref={listBoxRef}>
      <span className={styles.labelText}>{labelText}</span>
      <div
        className={styles.emptyState}
        onClick={() => setOpenDropdown(!openDropdown)}
        aria-expanded={openDropdown}
        aria-haspopup="listbox"
        onKeyDown={handleKeyListDown}
      >
        {currentValue}
        {openDropdown ? <span>{arrowUp}</span> : <span>{arrowDown}</span>}
      </div>

      {openDropdown && (
        <ul
          className={styles.listContainer}
          role="listbox"
          aria-activedescendant={String(list[selectedOption])}
          tabIndex={-1}
          onKeyDown={handleKeyListDown}
        >
          {list.map((item, index) => (
            <li
              key={index}
              className={styles.listItem}
              onClick={(e) => handleClick(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
              aria-labelledby="dropdown"
              aria-selected={selectedOption === index}
              role="option"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
