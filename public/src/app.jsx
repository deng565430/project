import React from "react";

export default class Hello extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        name: '访问者',
        text:'World',
        arr:[
          <h1>Hello React!</h1>,
          <h2>React is awesome!</h2>
        ]
      };
    }

    handleChange(e) {
      let name = e.target.value;
      this.setState({
        name: name
      });
    }

    handleClick() {
        this.setState({
            text: 'Clicked'
        });
    }


    render() {
        return (
        	<div style={{color:this.props.color}}>
        		<input type="text" onChange={this.handleChange.bind(this)} />
                <p>你好，{this.state.name}</p>
                <h1 onClick={this.handleClick.bind(this)}>
                    {'Hello' + this.state.text}
                </h1>
                <div>{this.state.arr}</div>
                <ol>
                  {
                    React.Children.map(this.props.children, function (child) {
                      return <li>{child}</li>;
                    })
                  }
                </ol>
        	</div>
        	)
    }
}
