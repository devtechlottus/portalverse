import { CardsOstandingData } from "@/types/CardsOustanding";
import { createRef, FC, memo, useEffect } from "react";

const CardsOstanding: FC<CardsOstandingData> = memo(({data}: CardsOstandingData) => {
  const cardsOustandingPortalverseRef = createRef();
  
  useEffect(() => {
    (cardsOustandingPortalverseRef.current as any).data = {
      title: data.title || '',
      cards: data.cards || [
        {
          image: {
            desktop: '',
            mobile: '',
          },
          title: '',
          text: '',
          backgroundColor: '',
        }
      ],
      wrapper:data.wrapper || false,
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-cards-outstanding-portalverse ref={cardsOustandingPortalverseRef}></lottus-cards-outstanding-portalverse>
})

export default CardsOstanding