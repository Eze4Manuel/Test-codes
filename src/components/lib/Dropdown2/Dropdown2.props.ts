interface Option {
  value: string;
  label: string;
}

interface Dropdown2Props {
  options: Option[];
  textColor?: string;
  border?: string;
  background?: string;
}

export default Dropdown2Props;
