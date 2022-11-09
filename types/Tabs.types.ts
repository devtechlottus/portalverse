export type TabsConfig = {
/**
   * The item where you can put other tabs
   */
  items: Array<TabPortalverseItemInterface>;
  /**
   * Size of tabs
   */
  size: 'small' | 'medium';
  /**
   * Color text active text
   */
  colorActive?: string;
  /**
   * Background color tab
   */
  colorTab?: string;
}

type TabPortalverseItemInterface = {
/**
   * Tab Text Label
   */
  label: string;
  /**
   * Id Item Tab
   */
  id?: string;
  /**
   * Status Disabled Item
   */
  disabled?: boolean;
  /**
   * Config Icons Label Tab
   */
  icons?: TabConfigIcons;
}

type TabConfigIcons = {
   /**
   * Icon Name Left Side
   */
  primary?: string;
  /**
   * Icon Name Right Side
   */
  secondary?: string;
  /**
   * Status to Duplicate Primary Icon in Left Side
   */
  duplicate?: boolean;
}

type TabsComponentData = {
    data: TabsConfig;
    tabIndex?: () => void;
}

export default TabsComponentData;