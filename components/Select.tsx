import { createRef, FC, useEffect } from "react"
import SelectComponentData from "@/types/Select.types"

const Select: FC<SelectComponentData> = ({ data, options }: SelectComponentData) => {
  const selectRef = createRef();

  useEffect(() => {
    (selectRef.current as any).data = {
      textDefault: data.textDefault || 'Option Default',
      disabled: data.disabled || false,
      icon: data.icon || 'person',
      reset: data.reset || false,
      zindexOptions: data.zindexOptions || 10,
      isLabel: data.isLabel || true,
      tagOnClickList: data.tagOnClickList || 'testOnClickList',
      tagOnClickOption: data.tagOnClickOption || 'testOnClickOption',
    };
    (selectRef.current as any).options = [...options];
  }, [data, options]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-select ref={selectRef}></lottus-select>
}

export default Select