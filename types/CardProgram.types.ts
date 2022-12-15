import { LinkIconsConfig } from "@/types/LinkLottus.types";

export type CardProgramData = {
  id?: string;
  title?: string;
  link: LinkIconsConfig;
  classNames?: string;
  image?: string;
  onClick: () => void
}

export default CardProgramData;