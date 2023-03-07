
  class ButtonCount extends HTMLElement {

    constructor() {
      super();

        let count = 0;
        const shadowRoot = this.attachShadow({mode: 'open'});

        const buttonArea = document.createElement('button');
        buttonArea.innerText = `Times Clicked: ${count}`;
        buttonArea.style = `background-color: var(--color-primary); border: 3px ridge var(--color-dark-trim); border-radius: 3px; font-weight: 700;`;

        buttonArea.addEventListener('click', countButton)
        function countButton () {
            buttonArea.innerText = `Times Clicked: ${++count}`;
        }

        shadowRoot.appendChild(buttonArea);
    }
}


customElements.define('button-count', ButtonCount);
