import React, {Component} from 'react'

class Product extends Component {
    render(){
        return(
            <div>
                <img className="productImage" alt={this.props.productInput} src={this.props.imageInput}/>
                <h4>{this.props.productInput}</h4>
                <h4>{this.props.priceInput}</h4>
            </div>
        )
    }
}

export default Product