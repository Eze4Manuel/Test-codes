interface DropdownProps {
  currentValue: string | number;
  list: string[] | number[];
  labelText: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default DropdownProps;
