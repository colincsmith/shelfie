import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            imageInput: "",
            productInput: "",
            priceInput: 0,
        }
        this.baseState = this.state
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    handleImage = (e) => {
        this.setState({
            imageInput: e.target.value
        })
    }

    handleProduct = (e) => {
        this.setState({
            productInput: e.target.value
        })
    }

    handlePrice = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }

    addProduct = () => {
        axios.post('/api/product', this.state)
        .then(res => {
            res.status(200)
        }).catch(err => console.log('we have a problem'))
        this.props.getInventory()
    }

    render(){
        return(
            <div className="form">
                Image url: <input value={this.state.imageInput} onChange={this.handleImage}/> 
                Product name: <input value={this.state.productInput} onChange={this.handleProduct}/>
                Price: <input value={this.state.priceInput} onChange={this.handlePrice}/>
                <button
                onClick={this.resetForm}
                >Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form