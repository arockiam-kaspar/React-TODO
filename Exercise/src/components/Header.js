import React from 'react';
import Title from "./Title";

export default class Header extends React.Component{
	constructor(){
		super()
	}
	onhandleChange(e){
		let title=e.target.value;
		this.props.changeTitle(title);
	}
	onAddClick(e){
		this.props.onCreate(this.refs.nextList.value);
		this.refs.nextList.value='';
	}
	render(){
		return(
			<section>
				<Title title={this.props.title}/>
				<input  ref="nextList" onChange={this.onhandleChange.bind(this)}/>
				<button onClick={this.onAddClick.bind(this)}>Create</button>
			</section>	
		);
	}
}

