import { FC, useState } from "react"
import cn from "classnames"
import TabsComponentConfig from "@/types/TabsFeatured.types";

const TabsFeatured: FC<TabsComponentConfig> = ({ tabs, onActive }: TabsComponentConfig) => {

  const [ tabActive, setTabActive ] = useState<number>(0);

  const activeTab = (position: number) => {
    setTabActive(position);
    onActive(position);
  }

  return <section className="w-full overflow-x-auto justify-center">
    <ul className="flex gap-1 justify-center w-p:justify-start">
      {
        tabs.map(({ label }: any, i: number) => <li key={`tab-${i}`} className={cn("w-auto border border-b-2 flex flex-col justify-center", { "border-b-[#B0003C]": tabActive !== i })} onClick={() => activeTab(i)}>
            <div className={cn("py-4 px-6 flex flex-col justify-center", { "bg-[#000] text-white": tabActive === i })}>
              <p className="text-center">{ label }</p>
            </div>
          </li>)
      }
    </ul>
  </section>
}

export default TabsFeatured