import React, { Component } from 'react';

class Product extends Component{
	constructor(props) {
		super(props);
		this.onAddToCart = this.onAddToCart.bind(this);

	}
	onAddToCart() {
		alert(this.props.infor.name);
	}
	render() {
		let product = this.props.infor;
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="thumbnail">
					<img src={product.image} alt={product.name} />
					<div className="caption">
						<h3>{product.name}</h3>
						<p>{product.price}</p>
						<p>
							<a className="btn btn-primary" onClick={ this.onAddToCart}>Add</a>
						</p>
					</div>
				</div>
			</div>
			
		)
	}
}


export default Product;
