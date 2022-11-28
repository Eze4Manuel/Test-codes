export default interface TableProps {}

export interface TableCellProps {
  url?: string;
  onClick?: () => void;
}

export interface TableHeadProps {
  items: string[];
}

export interface TableRowProps {
  onClick?: () => void;
}
