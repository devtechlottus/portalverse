import { ButtonInterface } from "@/types/Button.types";
import { LinkIconsConfig } from "@/types/LinkLottus.types";

export const ButtonInit: ButtonInterface = {
  type: 'primary',
  title: 'texto',
  size: 'small',
  icon: '',
  lyIcon: false,
  disabled: false,
  isExpand: true,
  tagOnClick: 'testOnClick',
};

export const LinkIconsInit: LinkIconsConfig = {
  text: '',
  size: 'small',
  isUnderline: false,
  isBold: false,
  disabled: false,
  id: '123',
  iconFirst: '',
  iconSecond: '',
};
