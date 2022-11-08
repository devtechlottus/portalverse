import React, { FC, useEffect } from "react"
import LinkLottusComponentData from "@/types/LinkLottus.types"

const LinkIcons: FC<LinkLottusComponentData> = ({data, onClick}: LinkLottusComponentData)  => {
  const linkIconsRef = React.createRef()

  useEffect(() => {
    (linkIconsRef.current as any).data = {
      text: data.text || '',
      size: data.size || '',
      isUnderline: data.isUnderline || false,
      isBold: data.isBold || false,
      disabled: data.disabled || false,
      id: data.id || '',
      iconFirst: data.iconFirst || '',
      iconSecond: data.iconSecond || '',
    };
  },[data])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (linkIconsRef.current as any).addEventListener('onClick', onClick);
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-link-icons ref={linkIconsRef}></lottus-link-icons>
}

export default LinkIcons