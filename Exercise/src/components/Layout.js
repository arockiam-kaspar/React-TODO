import React,{Component} from 'react';
import Header from './Header';
import * as TodoActions from '../actions/TodoActions';	
import TotoStore from '../stores/TodoStore'
import ChannelSection from './ChannelSection';


export default class Layout extends Component{
	constructor(props){
		super(props);

		this.state={
			title:"Hello world",
			data:TotoStore.getAll()
		};
		//console.log(TotoStore.getAll())
	}
	componentWillMount(){
		TotoStore.on('change', () => {
			console.log(TotoStore.getAll())
			this.setState({
				data:TotoStore.getAll()
			});
		});
	}
	onChangeTitle(title){
		this.setState({title});
	}
	onCreateClick(data){
		//this.state.data.push({name:data,id:Date.now()});
		//this.setState(this.state);
		TodoActions.createTodo(data)
	}
	render(){
		setTimeout(() => {
			clearTimeout();
			//this.setState({product:"Dell Apple"});
		},2000);
		const  todos  = this.state;

		const ChannelSec = todos.data.map((value,key) => {
			return <ChannelSection  key={value.id} {...value}/>
		});
		return(
			<div>
				<ul>{ChannelSec}</ul>
				<Header changeTitle={this.onChangeTitle.bind(this)} onCreate={this.onCreateClick.bind(this)} title={this.state.title}/>
			</div>
		);
	}
}

