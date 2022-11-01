import AccordionComponentData from "@/types/Accordion.types";
import { createRef, FC, useEffect } from "react";

const Accordion: FC<AccordionComponentData> = ({ data }: AccordionComponentData) => {

  const accordionRef = createRef();

  useEffect( () => {
    const items = data.items.map((item: any, id: number) => ({ title: item.title, content: item.answer, id: `item-${id}` }));
    (accordionRef.current as any).data = { items: [...items] };
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-accordion ref={accordionRef}></lottus-accordion>
}

export default Accordion;