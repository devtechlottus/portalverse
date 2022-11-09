export type NumbersConfig = {
    /**
   * NumbersPortalverse icon optional
   */
  icon?: string;
  /**
   * NumbersPortalverse prefix icon optional
   */
  prefix?: string;
  /**
   * NumbersPortalverse number
   */
  number: string;
  /**
   * NumbersPortalverse suffix icon optional
   */
  suffix?: string;
  /**
   * NumbersPortalverse title
   */
  title: string;
  /**
   * NumbersPortalverse body
   */
  body: string;
  /**
   * NumbersPortalverse container to box-shadow and background true | false
   */
  container: boolean;
}

export type NumbersData ={
    data: NumbersConfig;
}