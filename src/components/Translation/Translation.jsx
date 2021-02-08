import React from 'react';
import './Translation.sass';
import {cake, usersLovedUs, capterra, star} from '../../assets/images/import.js';

function Translation() {
	return (
		<div className="translation">
			<div className="container">
				<div className="translation__left">
					<img className="translation__left-img" src={cake} alt="cake" />
					<h3 className="translation__left-title">
						The most-loved translation
						management software
					</h3>
				</div>
 
				<div className="translation__right">
					<div className="translation__right-left">
						<img src={usersLovedUs} alt="logo company" />
						<ul className="translation__right-left-star-list">
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
						</ul>
						<p className="translation__right-left-text">USERS LOVE US</p>
					</div>

					<div className="translation__right-right">
						<img src={capterra} alt="capterra" />
						<ul className="translation__right-left-star-list">
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
							<li className="translation__right-left-star-list-item">
								<img src={star} alt="star"/>
							</li>
						</ul>
						<p className="translation__right-left-text">HIGHEST RATED</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Translation;