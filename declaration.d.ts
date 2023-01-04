type CustomElement<T, K extends string> = Partial<T & DOMAttributes<T>>
type CustomElementContainer<T, K extends string> = Partial<T & DOMAttributes<T> & { children: any }>

declare namespace JSX {
  interface IntrinsicElements {
    ['lottus-youtube']: CustomElement,
    ['lottus-lottie']: CustomElement,
    ['lottus-spotify']: CustomElement,
    ['lottus-rich-text']: CustomElement,
    ['lottus-link-icons']: CustomElement,
    ['lottus-button']: CustomElement,
    ['lottus-checkbox']: CustomElement,
    ['lottus-input']: CustomElement,
    ['lottus-accordion']: CustomElement,
    ['lottus-banner-portalverse']: CustomElementContainer,
    ['lottus-card-website-portalverse']: CustomElementContainer,
    ['lottus-navdrawer-portalverse']: CustomElement,
    ['lottus-numbers-portalverse']: CustomElement,
    ['lottus-promo-link-portalverse']: CustomElement,
    ['lottus-outstanding-module-portalverse']: CustomElement,
    ['lottus-breadcrumb']: CustomElement,
    ['lottus-link']: CustomElement,
    ['lottus-paginator']: CustomElement,
    ['lottus-modal']: CustomElementContainer,
    ['lottus-modal-iframe-portalverse']: CustomElement,
    ['lottus-feedback']: CustomElementContainer,
    ['lottus-mosaic-portalverse']: CustomElement,
    ['lottus-newsletter']: CustomElement,
    ['lottus-newbanner-portalverse']: CustomElementContainer,
    ['lottus-custom-head-portalverse']: CustomElement,
    ['lottus-cards-outstanding-portalverse']: CustomElementContainer
    ['lottus-carousel-portalverse']: CustomElementContainer,
    ['lottus-slider-portalverse']: CustomElement,
    ['lottus-select']: CustomElement,
    ['lottus-progress-bar']: CustomElement,
  }
}