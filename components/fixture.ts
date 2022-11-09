import { ButtonConfig } from "@/types/Button.types"
import { InputConfig } from "@/types/Input.types"
import { LinkIconsConfig } from "@/types/LinkLottus.types"

export const ButtonInit: ButtonConfig = {
  type: 'primary',
  title: 'texto',
  size: 'small',
  icon: '',
  lyIcon: false,
  disabled: false,
  isExpand: true,
  tagOnClick: 'testOnClick',
}

export const LinkIconsInit: LinkIconsConfig = {
  text: '',
  size: 'small',
  isUnderline: false,
  isBold: false,
  disabled: false,
  id: '123',
  iconFirst: '',
  iconSecond: '',
}

export const InputInit: InputConfig = {
  label: '',
  name: '',
  type: 'text',
  typeButton: 'classic',
  maxlength: '',
  onPaste: true,
  placeholder: '',
  autocomplete: 'off',
  disabled: false,
  alphanumeric: false,
  alphabetical: true,
  onlyNumbers: false,
  upperCase: false,
  pattern: '',
}