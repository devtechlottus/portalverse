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
    ['lottus-filter-portalverse-container']: CustomElementContainer,
    ['lottus-filter-dropdown']: CustomElement,
    ['lottus-input']: CustomElement,
    ['lottus-filter-footer-portalverse']: CustomElement,
    ['lottus-accordion']: CustomElement,
    ['lottus-nav-portalverse']: CustomElement,
    ['lottus-tabs-portalverse']: CustomElement,
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
    ['lottus-carousel-portalverse']: CustomElementContainer,
    ['lottus-slider-portalverse']: CustomElement,
  }
}