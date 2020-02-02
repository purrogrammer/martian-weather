import React from 'react';
import './index.css';
import Weather from './Weather';


class App extends React.Component {

state= {
  data:null
}

// const API_KEY = GZEfbkiievRBbmQ4EbVeQZDDbPtfO8jiVbKGYGTj;

async componentDidMount () { 
    const api_call = await fetch(`//api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`);
    const data = await api_call.json();
    this.setState({
      data: data
    });
  } 

  render() {
    if (this.setState.data) {
        return <Weather data={this.state.data} />
    } 
    return (
    <>
    </>

    )
  }

}

export default App;
