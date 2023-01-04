import Image from "@/types/Image.type";

export type CintilloData = {
  image?: Image;
  title?:string;
  subtitle?:string;
  email: string;
  phone: string;
  classNames?: string;
}

export default CintilloData