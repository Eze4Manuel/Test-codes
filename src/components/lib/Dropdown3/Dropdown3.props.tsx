interface Option {
  value: string;
  label: string;
}

interface Dropdown3Props {
  options: Option[];
  defaultValue?: string;
  className?: string;
}

export default Dropdown3Props;
