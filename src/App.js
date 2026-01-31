import React from "react";
 import Temp from './Temp/Temp'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  render() {
    return (
      <div className="all-product">
         <Temp/>
      </div>
    );
  }
}

export default App;
