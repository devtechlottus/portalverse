import { FC, useEffect, useState } from "react";
import FilterDropdownComponentData, { FilterDropdownConfig, OptionDropdownItem } from "@/types/FilterDropdown";
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';
import { ButtonInit } from "@/components/fixture";

const FilterDropdown: FC<FilterDropdownComponentData> = ({ data: { config, options }, onSelectedOptions, clear }: FilterDropdownComponentData) => {

  const [ open, setOpen ] = useState(false);
  const [ optionsList, setOptionsList ] = useState<any[]>([])
  const [ buttonConfig, setButtonConfig ] = useState({ ...ButtonInit, title: 'Aplicar', type: 'outlined', disabled: true });

  const [ optionsCollection, setOptionsCollection ] = useState<OptionDropdownItem[]>([]);
  const [ configComponent, setConfigComponent ] = useState<FilterDropdownConfig>({ label: "" });

  const onOpenClose = () => setOpen(!open)

  const getOptionSelected = (evt: CustomEvent, position: number) => {
    const { data: { selected } } = (evt.target as any);
    const option = optionsCollection[position].value;
    setOptionsList((state: string[]) => selected ? [...state, option] : state.filter((item: string) => item !== option))
  }
  
  const applySelection = () => {
    setOptionsList((state: string[]) => {
      onSelectedOptions(state);
      return state; 
    });
  }
  
  useEffect(() => {
    setOptionsCollection(() => options);
    setConfigComponent(() => config);
  }, [config, options])
  
  useEffect(() => {
    setButtonConfig({ ...buttonConfig, disabled: !optionsList.length })
  }, [optionsList])

  useEffect(() => {
  }, [optionsCollection])

  return <>
    <section className="dropdown" onClick={onOpenClose}>
      <span className="material-icons icon">{ configComponent.icon }</span>
      <p>{ configComponent.label }</p>
      <span className="material-icons icon" onClick={onOpenClose}>expand_{ open ? 'less' : 'more' }</span>
    </section>
    <section className="dropdown-list" style={{ display: open ? 'flex' : 'none' }}>
      {
        optionsCollection.map((option: OptionDropdownItem, i: number) => 
          <div key={`optionDropdown-${i}`}>
            <Checkbox data={option} onCheck={(evt: CustomEvent) => getOptionSelected(evt, i)} />
          </div>
        )
      }
      <div>
        <Button data={buttonConfig} onClick={applySelection}/>
      </div>
    </section>
  </>
}

export default FilterDropdown;