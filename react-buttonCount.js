
'use strict';

const buttonCToReturn = React.createElement;

class ButtonCount extends React.Component {
   

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {

    return buttonCToReturn(
      'button',
      { onClick: () => this.setState({ count: this.state.count+1}) },
      `Times Clicked: ${this.state.count}`
    );
  }
}


const domContainer = document.querySelector('#react-buttonCount');
const root = ReactDOM.createRoot(domContainer);
root.render(buttonCToReturn(ButtonCount));

