import './MyComponent.css';
import './LessComponent.less';
import React from 'react';

export default class Hello extends React.Component {
  render() {
    return (
    	<div className="MyComponent-wrapper box">
    		<h1>Hello world!!</h1>
    	</div>
    	)
    	
  }
}