export type NavDrawerConfig = {
 /**
   * navdrawer-portalverse text
   */
  text: string;
  /**
   * Select icon: true | false
   */
  iconselected: boolean;
  /**
   * Select link: true | false
   */
  linkselected: boolean;
  /**
   * Position left: true | false
   */
  isleft: boolean;
  /**
   * Single action: true | false
   */
  singleaction: boolean;
  /**
   * morecontent: true | false
   */
  morecontent: boolean;
  /**
   * active single true | false
   */
  activesingle: boolean;
}

export type NavDrawerData = {
    data: NavDrawerConfig;
    onClick?: () => void;
    onText?: () => void;
    onTextSingle?: () => void;
}

export default NavDrawerData;