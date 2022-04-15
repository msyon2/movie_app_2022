import React from "react";

class App extends React.Component {
  state = {
    isLoading:true,
    movies:[]
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false})
    },5000)
  }
  render(){
    const { isLoading } = this.state;

    return(
      <div>
        {isLoading ? 'Loading...': 'Loaded'}
        {/* condition ? execution when true: execusion when false */}
      </div>
    )
  }
}

export default App;
