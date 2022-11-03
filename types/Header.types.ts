export type HeaderConfig = {
    /**
   * Name of the left icon
   */
  icon: string;
  /**
   * URL logo
   * example:
   * https://example.com/image.jpg or assets/images/image.svg
   */
  image: string;
  /**
   * Name of the icon right
   */
  search: string;
  /**
   * Nav active?
   */
  active: boolean;
}

type HeaderComponentData = {
    data: HeaderConfig;
    onClickSearch?: () => void;
    onClickMenu?: () => void;
    onClickLogo?: () => void;
};

export default HeaderComponentData;