import { createRef, FC, memo, useEffect } from 'react'
import ButtonComponentData from '@/types/Button.types'

const Button: FC<ButtonComponentData> = memo(({data, onClick}: ButtonComponentData) => {
  const buttonPortalverseRef = createRef();

  useEffect(() => {
    (buttonPortalverseRef.current as any).data = {
      id: data.id || null,
      type: data.type  || 'primary',
      title: data.title || '',
      size: data.size || 'small',
      icon: data.icon || '',
      lyIcon: data.lyIcon,
      disabled: data.disabled,
      isExpand: data.isExpand,
      test: data.test || ''
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!buttonPortalverseRef.current) {
      (buttonPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
    (buttonPortalverseRef.current as any).addEventListener('onClick', onClick, false);
    () => {
      (buttonPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-button ref={buttonPortalverseRef}></lottus-button>
})

export default Button