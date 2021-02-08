import React from 'react';
import './Companies.sass';
import data from '../../data.js';

function Companies() {
	return (
		<div className="companies">
			<div className="container">
				<h2 className="companies-title">
					The preferred localization
					tool of 1500+ companies
				</h2>

				<ul className="companies__list">
					{data.companies.companiesList.map((item,index) => {
						return (
							<li className="companies__list-item" key={`${item.name}_${index}`}>
								<img 
									className="companies__list-img"
									src={item.img}
									alt={item.name}
									title={item.name}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Companies;