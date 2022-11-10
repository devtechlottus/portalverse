export type ModalIframeConfig = {
  /**
   * Title modal
   */
  title?: string;
  /**
   * Name of icon
   */
  icon?: string;
}

export type ModalIframeData = {
  data: ModalIframeConfig;
  onClose?: () => void;
}

export default ModalIframeData