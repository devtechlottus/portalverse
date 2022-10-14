type CustomElement<T, K extends string> = Partial<T & DOMAttributes<T>>;
type CustomElementContainer<T, K extends string> = Partial<T & DOMAttributes<T>  & { children: any }>;

declare namespace JSX {
  interface IntrinsicElements {
    ['lottus-youtube']: CustomElement,
    ['lottus-lottie']: CustomElement,
    ['lottus-spotify']: CustomElement,
    ['lottus-rich-text']: CustomElement,
    ['lottus-link-icons']: CustomElement,
    ['lottus-button']: CustomElement,
    ['lottus-checkbox']: CustomElement,
    ['lottus-filter-portalverse-container']: CustomElementContainer,
    ['lottus-filter-dropdown']: CustomElement,
  }
}