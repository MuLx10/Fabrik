import React from 'react';

class Card extends React.Component {
	render(){
		return(
			<div className="card-flex">
				<div className="card-flex-wrapper">
					<div className="card-flex-image">
						<img src={this.props.imgSrc} height="100px" width="150px"/>
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
