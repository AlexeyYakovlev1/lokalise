import React from 'react';
import './Header.sass';
import {logo} from '../../assets/images/import.js';
import data from '../../data.js';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__left">
					<a href="/" className="header__left-block-logo">
						<img className="header__left-logo" src={logo} alt="logo"/>
					</a>

					<nav className="header__left-menu">
						<ul className="header__left-menu-list">
							{data.header.menuList.map((item,index) => {
								return (
									<li className="header__left-menu-item" key={`${item.link}_${index}`}>
										<a href={item.link}>{item.text}</a>
									</li>
								)
							})}
						</ul>
					</nav> 
				</div>
				<div className="header__right">
					<button className="header__right-login white-btn">
						<a href="/">Log in</a>
					</button>
					<button className="header__right-try-free orange-btn">
						<a href="/">Try it free</a>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header;