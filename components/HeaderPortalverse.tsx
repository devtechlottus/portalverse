import { FC, useEffect, useState } from "react"
import Link from "next/link"
import cn from "classnames"
import Image from "@/components/Image"
import Button from "@/components/Button"
import { ButtonInit } from "@/components/fixture"
import Icon from "@/components/Icon"
import HeaderPortalverseComponentData from "@/types/HeaderPortalverse.types"

const Header: FC<HeaderPortalverseComponentData> = ({ classNames, onClickLogo, logotype, onClickCTA, menus }: HeaderPortalverseComponentData) => { 

  const [ menuInvisible, setMenuInvisible ] = useState<boolean>(true);
  const [ activeMenu, setActiveMenu ] = useState<boolean>(false);
  const [ activeOptionMenu, setActiveOptionMenu ] = useState<any[]>([]);

  const handleMenuMobile = () => setMenuInvisible(!menuInvisible)

  const handleHoverOption = (option: string) => {
    const { items } = menus.filter((menu: any) => menu.label === option)[0];
    setActiveOptionMenu(items);
    setActiveMenu(!!items.length);
  }
  
  const handleHoverOutOption = () => {
    setActiveOptionMenu([]);
    setActiveMenu(false);
  }

  useEffect(() => {
    if (!menuInvisible) {
      document.body.classList.add("overflow-y-hidden");
      return
    }
    document.body.classList.remove("overflow-y-hidden");
  }, [menuInvisible]);

  return <>
    {/* desktop menu */}
    <section className={cn("w-t:hidden w-p:hidden w-full flex p-1", { "shadow-15": !activeMenu }, classNames)}>
      <div className={cn("p-6 cursor-pointer border-solid border-SC/Actions/AC-300 border-r-2")} onClick={onClickLogo}>
        <Image src={logotype.src} alt={logotype.alt} classNames="w-[143px] h-10" classNamesImg="w-[143px] h-[38px]" />
      </div>
      <div className={cn("flex flex-col flex-grow p-1")}>
        <div className="flex justify-end pr-6 gap-6">
          <span>Accesos para:</span>
          <Link href="/alumnos" passHref>
            <a>
              <p>Alumnos</p>
            </a>
          </Link>
          <Link href="/egresados" passHref>
            <a>
              <p>Egresados</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-grow p-1 border-solid border-SC/Actions/AC-300 border-t-2">
          <div className="flex flex-grow gap-6">
            {
              menus.map((item: any, i: number) => <div key={`menu-${i}`} className="cursor-pointer p-1 z-20 flex items-center">
                <Link passHref href={item.route}>
                  <a className="flex">
                    <p>{item.label}</p>
                    <p className={cn({ "hidden": !item.items.length })} onMouseEnter={() => handleHoverOption(item.label)}>
                      <span className={cn("material-icons")}>expand_more</span>
                    </p>
                  </a>
                </Link>
                </div>)
            }
          </div>
          <div className="py-3 px-7 cursor-pointer border-solid border-SC/Actions/AC-300 border-x-2">
            <Icon name="search" className="w-6 h-6" />
          </div>
          <div className="px-6">
            <Button data={{ ...ButtonInit, title: "Pedir informes" }} onClick={onClickCTA} />
          </div>
        </div>
      </div>
    </section>
    {/* menu suboptions */}
    <div onMouseLeave={handleHoverOutOption} className={cn("w-full p-2 flex gap-6 justify-center w-t:hidden w-p:hidden", { "hidden": !activeMenu, "block shadow-15": activeMenu })}>
      {
        activeOptionMenu.map((item: any, i: number) => <div key={`submenu-${i}`} className="p-1 z-20">
            <Link href={item.route} passHref className="w-full">
              <a>
                <p>{item.label}</p>
              </a>
            </Link>
          </div>)
      }
    </div>
    {/* menu suboptions */}
    {/* desktop menu */}
    {/* desktop tablet */}
    <section className={cn("w-d:hidden w-full flex p-1 relative shadow-md", classNames)}>
      <div className="p-3 border-solid border-SC/Actions/AC-300 border-r-2" onClick={handleMenuMobile}>
        <Icon name="hamburguer" className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center flex-grow" onClick={onClickLogo}>
        <Image src={logotype.src} alt={logotype.alt} classNames="w-[90px] h-6" classNamesImg="w-[90px] h-6" />
      </div>
      <div className="p-3 border-solid border-SC/Actions/AC-300 border-l-2">
        <Icon name="search" className="w-6 h-6" />
      </div>
    </section>
    <div className={cn("w-d:hidden w-full static left-0 top-0 bottom-0 h-screen bg-white flex flex-col p-2", { "hidden z-10": menuInvisible })}>
      <div className="h-screen overflow-hidden">
        <div className="w-full flex justify-end p-1 z-20">
          <Icon name="close" className="w-4 h-4" onClick={handleMenuMobile} />
        </div>
        {
          menus.map((item: any, i: number) => <div key={`submenu-mobile-${i}`} className="w-full flex p-1 z-20">
              <Link href={item.route} passHref className="w-full">
                <a>
                  <p>{item.label}</p>
                </a>
              </Link>
            </div>)
        }
      </div>
    </div>
    {/* desktop tablet */}
  </> 
}

export default Header