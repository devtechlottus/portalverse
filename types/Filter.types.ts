export interface ConfigFilter {
  label: string;
  icon?: string;
};

export interface OptionsFilter {
  value: string;
  active: boolean;
  label: string;
};

export type ConfigItemFilterComponent = {
  config: ConfigFilter;
  options: OptionsFilter[];
}

type FilterComponentData = {
  [filter: string]: ConfigItemFilterComponent;
}

export default FilterComponentData