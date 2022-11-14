export type ModalConfig = {
  /**
  * Name of icon
  */
  icon: string;
  /**
   * Title of the modal
   */
  title: string;
  /**
   * Tag output click close modal
   */
  tagOnClose?: string;
}

export type ModalData = {
  data: ModalConfig;
  isShow?: boolean;
  onBtn?: () => void;
  onClose?: () => void; 
}

export default ModalData