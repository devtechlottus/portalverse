import { FC, useState } from "react"
import cn from "classnames"
import TabsComponentConfig from "@/types/TabsFeatured.types"
import Image from "@/components/Image"

const TabsFeatured: FC<TabsComponentConfig> = ({ tabs, onActive }: TabsComponentConfig) => {

  const [ tabActive, setTabActive ] = useState<number>(0);

  const activeTab = (position: number) => {
    setTabActive(position);
    onActive(position);
  }

  return <section className="w-full overflow-x-auto justify-center mb-4">
    <ul className="flex gap-1 w-d:justify-center w-t:justify-center w-p:justify-start items-baseline">
      {
        tabs.map(({ label }: any, i: number) => <li key={`tab-${i}`} className={cn("w-auto  flex flex-col justify-center")} onClick={() => activeTab(i)}>
            <div className={cn("py-4 px-6 flex flex-col justify-center cursor-pointer border border-b-2", { "bg-[#000] text-white ": tabActive === i, "border-b-[#B0003C]": tabActive !== i })}>
              <p className="text-center whitespace-nowrap">{ label }</p>
            </div>
            <div className={cn("flex justify-center relative", { "hidden": tabActive !== i })}>
              <Image src="/images/triangle_tabs.png" alt="triangle" classNames="w-[44px] h-[30px] absolute -top-1" />
            </div>
          </li>)
      }
    </ul>
  </section>
}

export default TabsFeatured