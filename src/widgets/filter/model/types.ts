export interface iFilterOption {
  value: string;
  label: string;
}

export interface iFilterConfig {
  label: string;
  query: string;
  options: iFilterOption[];
}
