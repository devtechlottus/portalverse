import { ButtonConfig } from "@/types/Button.types";
import Image from "@/types/Image.type";
import { LinkIconsConfig } from "@/types/LinkLottus.types";


type SliderConfig = {
  /**
   * Image of slider
   */
  urlImage: Image;
  /**
   * Height of mobile slider
   */
  heightmobile: string;
  /**
   * title of slider
   */
  title: string;
  /**
   * Text of slider
   */
  text: string;
  /**
   * Description of slider
   */
  description: string;
  /**
   * Position content center
   */
  center: boolean;
  /**
   * Position content left
   */
  left: boolean;
  /**
   * Position content middle
   */
  middle: boolean;
  /**
   * position content bottom
   */
  bottom: boolean;
  /**
   * button of slider
   */
  action?: ButtonConfig;
  /**
   * link of slider
   */
  link?: LinkIconsConfig;
}

type SliderPortalverseConfig = {
  /**
   * Set width of slider
   */
  width: '100%';
  /**
   * set height of slider
   */
  height: '100%';
  /**
   * Array of sliders
   */
  slides: Array<SliderConfig>;
  /**
   * Icon slider left
   */
  iconleft: string;
  /**
   * Icon slider right
   */
  iconright: string;
  /**
   * Wrapper mode
   */
  wrapper?: boolean;
}

type SliderComponentData = {
  data: SliderPortalverseConfig;
}

export default SliderComponentData