import { createRef, FC, memo, useEffect } from "react";
import HeaderComponentData from '@/types/Header.types';

const Header: FC<HeaderComponentData> = memo(({data, onClickSearch, onClickMenu, onClickLogo}: HeaderComponentData) => {
  const headerRef = createRef();

  useEffect(() => {
    (headerRef.current as any).data = {
      icon: data.icon || '',
      image: data.image || '',
      search : data.search || '',
      active: data.active || false,
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!headerRef.current) {
      (headerRef.current as any).removeEventListener('onClickSearch', onClickSearch, false);
      (headerRef.current as any).removeEventListener('onClickMenu', onClickMenu, false);
      (headerRef.current as any).removeEventListener('onClickLogo', onClickLogo, false);  
    }
    (headerRef.current as any).addEventListener('onClickSearch', onClickSearch, false);
    (headerRef.current as any).addEventListener('onClickMenu', onClickMenu, false);
    (headerRef.current as any).addEventListener('onClickLogo', onClickLogo, false);
    () => {
      (headerRef.current as any).removeEventListener('onClickSearch', onClickSearch, false);
      (headerRef.current as any).removeEventListener('onClickMenu', onClickMenu, false);
      (headerRef.current as any).removeEventListener('onClickLogo', onClickLogo, false);
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-nav-portalverse ref={headerRef}></lottus-nav-portalverse>
})

export default Header;