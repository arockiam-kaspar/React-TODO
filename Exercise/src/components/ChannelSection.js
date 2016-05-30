import React,{Component} from 'react';

export default class ChannelSection extends Component{
	constructor(){
		super();
	}
	render(){
		let channelData=this.props.title;
		let name=this.props.name;
		//console.log(this.props)
		return(
			/*<ol>
		        {channelData.map(function(result) {
		          return <li key={result.id}>{result.name}</li>
		        })}
	      	</ol>*/
	      	<li >{name}</li>
		)
	}
}