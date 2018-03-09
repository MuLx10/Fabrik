import React from 'react';
import './../css/styles.css';

class Card extends React.Component {
	render(){
		return(
			<div className="card-flex">
				<div className="card-flex-wrapper">
					<div className="card-flex-image">
						<img src={this.props.imgSrc} alt="img placeholder" />
					</div>
					<div className="card-flex-content">
						<p>{this.props.name}</p>
					</div>
                </div>
			</div>
           
			
		);
	}
}

Card.propTypes = {
  imgSrc: React.PropTypes.string,
  name: React.PropTypes.string
};

export default Card;
