import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import DeleteCopy from './DeleteCopy';

const ParseComponent = ParseReact.Component(React);

export default class Bin extends ParseComponent {
	constructor() {
		super();
	}

	observe(props, state) {
		return {
			copys: (new Parse.Query('ParseNote')).equalTo('level', 7)
		};
	}

	render() {
		return (
			<div>
				{this.data.copys.map(function(c) {
		          return (
		          	<DeleteCopy key={c.id} content = {c.content} obj={c} />
		          );
		        }, this)}
			</div>
		);
	}
}