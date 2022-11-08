import { FC } from "react"
import SearchIcon from "@/public/icons/search.svg"
import MarkerIcon from "@/public/icons/marker.svg"
import PhoneIcon from "@/public/icons/phone.svg"
import EmailIcon from "@/public/icons/email.svg"
import EyeIcon from "@/public/icons/eye.svg"

const iconTypes: any = {
  search: SearchIcon,
  marker: MarkerIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  eye: EyeIcon,
}

const IconComponent: FC<any> = ({ name, ...props }: any) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
}

export default IconComponent