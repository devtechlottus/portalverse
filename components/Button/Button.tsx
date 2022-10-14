import React, { useEffect } from 'react'

const Button = ({data, onClick}: any) => {

  const buttonRef = React.createRef();
  
  useEffect(() => {
    (buttonRef.current as any).data = {
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
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (buttonRef.current as any).addEventListener('onClick', onClick);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <lottus-button ref={buttonRef}></lottus-button>
    </>
  )
}

export default Button;
