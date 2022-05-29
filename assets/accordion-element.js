class AccordionElement extends HTMLElement {
  constructor() {
    super();
    const accordionTitle = this.querySelector('.accordion-element__title');
    accordionTitle.addEventListener('click', () => {
      this.toggleAccordion();
    });
  }
  
  toggleAccordion() {
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }
}

customElements.define('accordion-element', AccordionElement);