import ImageComponentData from "./Image.types";
import { LinkConfig } from "./Link.types";

export type CardProgramData = {
  id?: string;
  title?: string;
  link: LinkConfig;
  classNames?: string;
  image?: string;
  onClick: () => void
}

export default CardProgramData;