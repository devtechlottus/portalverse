export type CarouselPortalverseType = {
  /**
   * Array of sliders
   */
  // slides: Array<CardWebsitePortalverseInterface>;
  slides: Array<any>;
  /**
   * Icon slider left
   */
  iconleft: string;
  /**
   * Icon slider right
   */
  iconright: string;
  size: string;
  /**
   * Mode wrapper
   */
  wrapper?: boolean;
}

type CarouselPortalverseComponentData = {
  data: CarouselPortalverseType;
}

export default CarouselPortalverseComponentData