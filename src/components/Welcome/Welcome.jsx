import React from 'react';
import './Welcome.sass';
import {welcome} from '../../assets/images/import.js';

function Welcome() {
	return (
		<div className="welcome">
			<div className="container">
				<div className="welcome__left">
					<h1 className="welcome__left-title">
						Accelerate localization from code to delivery
					</h1>
					<p className="welcome__left-description">
						A localization and translation
						management platform for agile teams.
						Embrace automation, workflow
						transparency, and fast project delivery.
					</p>
					
					<div className="welcome__left-down">
						<div className="welcome__left-down-buttons">
							<button className="welcome__left-down-buttons-btn orange-btn">
								<a href="/">Try it free</a>
							</button>
							<button className="welcome__left-down-buttons-btn white-btn">
								<a href="/">Book a demo</a>
							</button>
						</div>
						<small className="welcome__left-down-info">
							Try all features for 14 days &#183; No credit card required
						</small>
					</div>
				</div>

				<div className="welcome__right">
					<img className="welcome__right-img" src={welcome} alt="welcome image" />
				</div>
			</div>
		</div>
	)
}

export default Welcome;