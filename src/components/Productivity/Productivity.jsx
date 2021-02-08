import React from 'react';
import './Productivity.sass';
import data from '../../data.js';

function Productivity() {
	return (
		<div className="productivity">
			<div className="container">
				<h2 className="productivity-title">
					Boost your localization team's productivity tenfold
				</h2>

				<ul className="productivity__list">
					{data.productivity.productivityList.map((item,index) => {
						return (
							<li className="productivity__list-item" key={`${item.title}_${index}`}>
								<img 
									className="productivity__list-item-img"
									src={item.img}
									alt={item.title}
								/>

								<h4 className="productivity__list-item-title">{item.title}</h4>

								<p className="productivity__list-item-description">{item.description}</p>

								<a className="productivity__list-item-learn" href={item.link}>Learn more</a>
							</li>	
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Productivity;