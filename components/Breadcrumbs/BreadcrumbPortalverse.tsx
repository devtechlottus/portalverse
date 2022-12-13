import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import cn from "classnames"
import BreadcrumbsComponentData from "@/types/BreadcrumbsPortalverse.types"

const Breadcrumbs: FC<BreadcrumbsComponentData> = ({ visible = true, classNames }: BreadcrumbsComponentData) => {
  const mainRoute = <span className="material-icons mr-1">home</span>;
  const { asPath } = useRouter();
  const [ allRoutes, setAllRoutes ] = useState<Array<string>>([]);

  useEffect(() => {
    const routes = Array.from(asPath.split("/"));
    setAllRoutes([...routes]);
  }, [asPath]);

  const Crumb = (text: string, position: number, router: Array<string>, last = false) => {

    const url = router.slice(0, position+1).join("/");

    return text === ''
      ? last
        ? mainRoute
        : <Link href={"/"}><a>{mainRoute}</a></Link>
      : !last
        ? <Link href={url}><a className="flex"><p className="mr-1 text-[#282828]">/</p><p className="mr-1">{ text }</p></a></Link>
        : <span className="flex"><p className="mr-1 text-[#282828]">/</p><p className="text-[#B0003C]">{ text }</p></span>
  }

  return <ul className={cn("w-full flex my-6 font-Nunito font-bold text-xs text-[#686868]", classNames, { "hidden": !visible })} aria-label="breadcrumbs">
    {
      allRoutes.map((route: string, i: number, arr: Array<string>) => <li key={`crumb-${i}`}>{Crumb( route, i, arr, i === (arr.length - 1) )}</li>)
    }
  </ul>
}

export default Breadcrumbs