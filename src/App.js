import React, {Component} from 'react'
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import Product from './components/Product'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('we have a problem'))
  }

  componentDidMount(){
    this.getInventory()
  }


  render(){
  return (
    <div className="App">
      <Header/>
      <Dashboard inventory={this.state.inventory}/>
      <Form getInventory={this.getInventory}/>
    </div>
  );
  }
}

export default App;
