export type NewsletterConfig = {
  icon?: string;
  placeholder?: string;
  autocomplete?: string;
  /**
   * Types 'shadow' | 'outlined' | 'filled'
   */
  typeSearch?: string;
  alphabetical?: boolean;
  upperCase?: boolean;
  type?: string;
  size?: string; 
}

export type NewsletterData = {
  data: NewsletterConfig;
  hasErrorEmail?: boolean;
  errorMessageEmail?: string;
  onForm?: () => void;
}

export default NewsletterData