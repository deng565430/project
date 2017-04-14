import React from "react";

export default class MyComponent extends React.Component {
	constructor(...args) {
		super(...args);
	}
	handleClick(e) {
	  	return {
	  		data:1,
	  		title:2
	  	}
	}


	render() {
		return (
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input"  onClick={this.handleClick} />
				<h1>{this.handleClick().data}</h1>
			</div>

		)
	}
}

