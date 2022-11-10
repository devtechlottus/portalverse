import ButtonComponentData from "./Button.types";

export type NewBannerConfig = {
    /**
   * Url image background newBanner
   */
  image: Image;
  /**
   * banner title
   */
  title: string;
  /**
   * banner text
   */
  text: string;
  /**
   * Banner position center
   */
  contentCenter: boolean;
  /**
   * Banner position left
   */
  contentLeft: boolean;
  /**
   * Banner button
   */
  action?: ButtonComponentData;
}

export type Image = {
  mobile: string;
  desktop: string;
}

export type NewBannerData = {
  data: NewBannerConfig;
  onBtn?: () => void;
}

export default NewBannerData