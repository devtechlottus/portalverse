import { FC, memo, useEffect, useState } from "react"
import FilterComponentData from "@/types/Filter.types"
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown"
import { LinkIconsInit } from "@/components/fixture"
import LinkIcons from "@/components/LinkLottus"

const Filter: FC<FilterComponentData> = memo(({ data }: FilterComponentData) => {

  const [ config, setConfig ] = useState<any[]>([])
  const [ selectedOptions, setSelectedOptions ] = useState<string[][]>([]);
  const linkLottusConfig = { ...LinkIconsInit, text: 'Eliminar filtros', iconFirst: 'close' };

  useEffect(() => {
    const items = Object.entries(data).map(([ key, config ]: any) => ({ key, config }))
    setConfig((state: any[]) => [ ...items ]);
  }, [data])

  const clearAllFilters = () => {
    // clear options
    console.log("its a clear filters")
  }

  const handleOnSelectedOptions = (options: string[], key: string, position: number) => {
    console.log("data in handle", options, key, position)
  }

  return <>
    <section className="container-filter">
      <div>
        <p>Filtrar programas:</p>
        <span>
          <LinkIcons data={linkLottusConfig} onClick={clearAllFilters}/>
        </span>
      </div>
      <section>
        {
          config.map( ({ key, config }: any, i: number) =>
            <div key={`filter-${i}`}>
              <FilterDropdown data={config} onSelectedOptions={(options: string[]) => handleOnSelectedOptions(options, key, i)} />
            </div>
          )
        }
      </section>
    </section>
  </>
});

export default Filter