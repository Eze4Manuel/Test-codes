interface Option {
  value: string;
  label: string;
}

interface Dropdown2Props {
  options: Option[];
  textColor?: string;
  border?: string;
  background?: string;
  placeholder: string;
  fontWeight?: number;
  fontSize?: string;
}

export default Dropdown2Props;
