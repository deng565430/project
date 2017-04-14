import React from 'react';

export default class UserGist extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			username: '',
			lastGistUrl: ''
		}
	}

	componentDidMount() {
		$.get(this.props.source, function(result) {
			var lastGist = result[0]
		})
	}
}