import React, { Component } from 'react';

class Header extends Component{
	render() {
		return (
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand">ReactJS</a>
				<ul className="nav navbar-nav">
					<li className="active">
						<a>Trang Chủ</a>
					</li>
					<li>
						<a>Danh mục sản phẩm</a>
					</li>
				</ul>
			</nav>
		);
	}
}


export default Header;
