import React from 'react';
import Weather from './weather'
import './index.css';

class App extends React.Component {

state= {
  data:null
}

 // const API_KEY = GZEfbkiievRBbmQ4EbVeQZDDbPtfO8jiVbKGYGTj;

async componentDidMount () { 
    const API = await fetch(`//api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
    const data = await API.json();
    this.setState({
      data: data
    })
  } 

  render() {
    if (this.setState.data) {
        return <Weather data={this.state.data} />
    } else
    return (
    <>
    </>

    )
  }

}


export default App;
