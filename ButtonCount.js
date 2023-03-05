
  class ButtonCount extends HTMLElement {
    
    constructor() {
      super();

        let count = 0;
        const shadowRoot = this.attachShadow({mode: 'open'});

        const buttonArea = document.createElement('button');
        buttonArea.innerText = `Times Clicked: ${count}`;

        buttonArea.addEventListener('click', countButton)
        function countButton () {
            
            setTimeout(()=>{
                buttonArea.innerText = `Times Clicked: ${++count}`;
            }, 0);

        }

        shadowRoot.appendChild(buttonArea);

    }
}


customElements.define('button-count', ButtonCount);
