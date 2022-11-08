import { createRef, FC, memo, useEffect } from "react"
import HeaderComponentData from "@/types/Header.types"

const Header: FC<HeaderComponentData> = memo(({data, onClickSearch, onClickMenu, onClickLogo}: HeaderComponentData) => {
  const headerRef = createRef()

  useEffect(() => {
    (headerRef.current as any).data = {
      icon: data.icon || '',
      image: data.image || '',
      search : data.search || '',
      active: data.active || false,
    }
  }, [data])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (headerRef.current as any).addEventListener('onClickSearch', onClickSearch)
    (headerRef.current as any).addEventListener('onClickMenu', onClickMenu)
    (headerRef.current as any).addEventListener('onClickLogo', onClickLogo)
  }, [])

  return <lottus-nav-portalverse ref={headerRef}></lottus-nav-portalverse>
})

export default Header