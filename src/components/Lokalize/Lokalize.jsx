import React from 'react';
import './Lokalize.sass';
import data from '../../data.js';

function Lokalize() {
	return (
		<div className="lokalize">
			<div className="container">
				<h3 className="lokalize-title">What can you localize with Lokalise?</h3>

				<ul className="lokalize__list">
					{data.lokalize.lokalizeList.map((item,index) => {
						return (
							<li className="lokalize__list-item" key={`${item.title}_${index}`}>
								<img 
									className="lokalize__list-item-img" 
									src={item.img} 
									alt={item.title} 
									title={item.title}
								/>

								<h4 className="lokalize__list-item-title">{item.title}</h4>

								<p className="lokalize__list-item-description">
									{item.description}
								</p>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Lokalize;