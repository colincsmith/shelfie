import React, {Component} from 'react'
import Product from './Product'

class Dashboard extends Component{ 
    render(){
    const mappedInventory = this.props.inventory.map(product => {
        return(
            <Product imageInput={product.imageInput} productInput={product.productInput} priceInput={product.priceInput}/>
        )
    })
        return(
            <div className="dash">
                <ul>{mappedInventory}</ul>
            </div>
            
        )
    }
}

export default Dashboard