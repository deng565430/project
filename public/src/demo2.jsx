import React from 'react';

export default class LikeButton extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			liked: false
		}
	}


	handleClick(e) {
		 this.setState({
        	liked: !this.state.liked
      	});
	}
//this.handleClick.bind(this) 需要绑定this指针
	render() {
		var text = this.state.liked ? 'like' : 'haven\'t liked';
		var style = {
			color:'red',
			fontSize: '30px',
			background:'yellow'
		}
		return (
			<div style={style} onClick={this.handleClick.bind(this)}>
				You {text} this. Click to toggle
			</div>

		)
	}
}