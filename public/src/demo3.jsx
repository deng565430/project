import React from 'react';

export default class Input extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			liked: false,
			value:'Hello!'
		}
	}
	// 设置
	getInitialState() {
		return {
			value: 'Hello!'
		}
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}



	render() {
		var value = this.state.value;
		var style = {
			color:'red',
			fontSize: '30px',
			background:'yellow'
		}
		return (
			<div style={style}>
				<input type="text" value={value} onChange={this.handleChange.bind(this)} />
				<p>{value}</p>
			</div>

		)
	}
}