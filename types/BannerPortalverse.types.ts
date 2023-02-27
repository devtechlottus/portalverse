import Image from "@/types/Image.type";
import Aspect from "./Aspect.types";
import ButtonComponentData, { ButtonConfig } from "./Button.types";
import { YoutubeDimensions } from "./Youtube.types";

export type BannerPortalverseConfig = {
  image?: Image;
  aspect?: Aspect;
  title?:string;
  subtitle?:string;
  position?:string;
  height?: string;
  overlayWhite?: boolean;
  overlayDak?: boolean
  button: ButtonConfig
  noAction:boolean;
  dimensions?: Array<string>;
  font: string;
}

type BannerPortalverseComponentData = {
  classNames?: string;
  data: BannerPortalverseConfig;
  onClick?: ()=>void
}

export default BannerPortalverseComponentData