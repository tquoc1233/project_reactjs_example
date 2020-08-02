import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
	var products = [
		{
			id: 1,
			name: 'Product1',
			price: 1000,
			image: 'https://picsum.photos/200/300?grayscale',
			status: true
		},
		{
			id: 2,
			name: 'Product2',
			price: 2000,
			image: 'https://picsum.photos/200/300?grayscale',
			status: true
		},
		{
			id: 3,
			name: 'Product1',
			price: 3000,
			image: 'https://picsum.photos/200/300?grayscale',
			status: false
		},
		{
			id: 4,
			name: 'Product4',
			price: 4000,
			image: 'https://picsum.photos/200/300?grayscale',
			status: true
		},
		{
			id: 5,
			name: 'Product5',
			price: 5000,
			image: 'https://picsum.photos/id/237/200/300',
			status: true
		},
	];

	let list_product = products.map(function(product, index) {
		let html = '';
		if (product.status) {
			 html = <Product key={index} infor={product}/>;
		}
		return html;
	});
	return (
		<div>
			<Header/>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						{list_product}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
