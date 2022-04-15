import React from "react";

class App extends React.Component {
  constructor(props){
    super(props)
    console.log('constructor실행완료');
  }

  state = {
    count: 0,
  };
  add = () => {
    this.setState({count: this.state.count + 1})
  }
  minus = () => {
    this.setState({count: this.state.count - 1})
  }
  componentDidMount(){
    console.log('componentDidMount실완');
  }
  componentDidUpdate(){
    console.log('Update실완');
  }
  componentWillUnmount(){
    console.log('willUnmount실완');
  }
  render(){
    console.log('render실완')
    return (
    <div>
      <h1>class component. The number is: {this.state.count} </h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </div>)
  }
}

export default App;
