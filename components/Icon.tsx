import { FC, memo } from "react"
import SearchIcon from "@/icons/search.svg"
import MarkerIcon from "@/icons/marker.svg"
import PhoneIcon from "@/icons/phone.svg"
import EmailIcon from "@/icons/email.svg"
import EyeIcon from "@/icons/eye.svg"
import PersonIcon from "@/icons/person.svg"
import HamburguerIcon from "@/icons/hamburguer.svg"
import CloseIcon from "@/icons/close.svg"
import FacebookIcon from "@/icons/facebook.svg"
import InstagramIcon from "@/icons/instagram.svg"
import TiktokIcon from "@/icons/tiktok.svg"
import TwitterIcon from "@/icons/twitter.svg"
import YoutubeIcon from "@/icons/youtube.svg"
import Agreement from "@/icons/agreement.svg"
import GraduateCap from "@/icons/graduatecap.svg"
import Trophy from "@/icons/trophy.svg"
import TriangleDown from "@/icons/triangledown.svg"

const iconTypes: any = {
  search: SearchIcon,
  marker: MarkerIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  eye: EyeIcon,
  person: PersonIcon,
  hamburguer: HamburguerIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  agreement: Agreement,
  graduatecap: GraduateCap,
  trophy: Trophy,
  triangledown: TriangleDown
};

const IconComponent: FC<any> = memo(({ name, ...props }: any) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
});

export default IconComponent