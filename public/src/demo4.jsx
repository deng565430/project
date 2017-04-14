import React from 'react';

export default class HelloW extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			opacity: 1.0
		}
	}

	  getInitialState () {
	    return {
	      opacity: 1.0
	    };
	  }
//react定义的方法  可设置一些参数
	componentDidMount(e) {
	var opacity = this.state.opacity;
		this.timer = setInterval(function() {
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this), 100);
	}

	render() {
		return (
			<div style={{opacity: this.state.opacity}}>
				<h2>Hello {this.props.name}</h2>
				<h3>{this.state.opacity}</h3>
			</div>
		)
	}

}