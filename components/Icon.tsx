import { FC, memo } from "react"
import SearchIcon from "@/icons/search.svg"
import MarkerIcon from "@/icons/marker.svg"
import PhoneIcon from "@/icons/phone.svg"
import EmailIcon from "@/icons/email.svg"
import EyeIcon from "@/icons/eye.svg"
import HamburguerIcon from "@/icons/hamburguer.svg"
import CloseIcon from "@/icons/close.svg"

const iconTypes: any = {
  search: SearchIcon,
  marker: MarkerIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  eye: EyeIcon,
  hamburguer: HamburguerIcon,
  close: CloseIcon
};

const IconComponent: FC<any> = memo(({ name, ...props }: any) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
});

export default IconComponent