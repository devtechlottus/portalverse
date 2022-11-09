import { useEffect, createRef, FC, memo } from "react"
import CheckboxComponentData from "@/types/Checkbox.types"

const Checkbox: FC<CheckboxComponentData> = memo(({ data, onCheck }: CheckboxComponentData) => {
  const checkboxRef = createRef();

  useEffect(() => {
    (checkboxRef.current as any).data = {
      label: data.label || "",
      disabled: data.disabled,
      selected: data.selected,
      name: data.name || "",
    };
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!checkboxRef.current) {
    (checkboxRef.current as any).removeEventListener("onCheck", onCheck);
    }
    (checkboxRef.current as any).addEventListener("onCheck", onCheck);
    () => {
      (checkboxRef.current as any).addEventListener("onCheck", onCheck);
    }
  }, [onCheck]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-checkbox ref={checkboxRef}></lottus-checkbox>
});

export default Checkbox