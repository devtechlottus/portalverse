import LinkLottusComponentData from "@/types/LinkLottus.types"

export type FooterConfig = {
  /**
   * Image logo footer
   */
  image: string;
  /**
   * Text footer portalverse
   */
  text: string;
  /**
   * Icons social network
   */
  social: Array<string>;
  /**
   * Images certifications
   */
  certificationsImg: Array<string>;
  /**
   * Menu headers links
   */
  encabezados: Array<FooterHead>;
  /**
   * Link phone
   */
  linkPhone: LinkLottusComponentData;
  /**
   * Link
   */
  link: LinkLottusComponentData;
  /**
   * Link text
   */
  linkText: LinkLottusComponentData;
  /**
   * text copyright
   */
  copyrightText: string;
  /**
   * Link lottus
   */
  linkLottus: LinkLottusComponentData;
  /**
   * Link privacity
   */
  linkPrivacy: LinkLottusComponentData;
}
/**
 * Interface FooterHeads
 */
type FooterHead = {
  /**
   * Title head
   */
  title: string;
  /**
   * Links
   */
  link: Array<any>;
}

type FooterComponentData = {
  data: FooterConfig;
  onLinkMenu?: () => void;
  onLink?: () => void;
  onLinkPhone?: () => void;
  onLinkIcon?: () => void;
  onLinkDirectory?: () => void;
  onLinkCopyright?: () => void;
  onLinkPrivacy?: () => void;
  onNewsletter?: () => void;
}

export default FooterComponentData