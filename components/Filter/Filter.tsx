import { FC, memo, useEffect, useState } from "react"
import cn from "classnames"
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown"
import { LinkIconsInit } from "@/components/fixture"
import LinkIcons from "@/components/LinkLottus"
import FilterComponentConfig from "@/types/Filter.types"

const Filter: FC<FilterComponentConfig> = memo(({ data, color = "#000", onSelectionItems, onChangeView }: FilterComponentConfig) => {

  const [ active, setActive ] = useState<boolean>(false);
  const [ config, setConfig ] = useState<any[]>([])
  const [ selectedOptions, setSelectedOptions ] = useState<any>({});
  const [ mosaicActive, setMosaicActive ] = useState<boolean>(true);

  const linkLottusConfig = { ...LinkIconsInit, text: 'Eliminar filtros', iconFirst: 'close' };

  const changeMosaicView = () => {
    const newView = !mosaicActive;
    setMosaicActive(newView);
    onChangeView(newView);
  }

  useEffect(() => {
    const items = Object.entries(data).map(([ key, config ]: any) => ({ key, config }));
    setConfig([ ...items ]);
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (active) {
      onSelectionItems(selectedOptions);
    }
  }, [selectedOptions]);// eslint-disable-line react-hooks/exhaustive-deps

  const clearAllFilters = () => {
    // clear options
    console.log("its a clear filters")
  }

  const handleOnSelectedOptions = (options: string[], key: string) => {
    setSelectedOptions((state: any) => ({ ...state, [key]: [ ...options ] }));
    setActive(true);
  }

  return <section className="container-filter w-full flex flex-col">
      <div className="flex">
        <p>Filtrar programas:</p>
        <span>
          <LinkIcons data={linkLottusConfig} onClick={clearAllFilters}/>
        </span>
      </div>
      <section className="flex py-3 w-t:flex-col w-p:flex-col border-t border-b">
        {
          config.map( ({ key, config }: any, i: number) =>
            <div key={`filter-${i}`} className={cn("px-1 flex flex-col", { "border-r": i < 2 })}>
              <FilterDropdown color={color} data={config} onSelectedOptions={(options: string[]) => handleOnSelectedOptions(options, key)} onClearOptions={() => {}} />
            </div>
          )
        }
      </section>
      <div className="flex items-center justify-end cursor-pointer mt-6" onClick={changeMosaicView}>
        <span className="mr-1">Ver en { mosaicActive ? "mosaico" : "lista" }</span>
        <span className="material-icons icon">{ mosaicActive ? "space_dashboard" : "format_list_bulleted" }</span>
      </div>
    </section>
});

export default Filter