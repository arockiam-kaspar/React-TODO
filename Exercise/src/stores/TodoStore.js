import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class TotoStore extends EventEmitter {
	constructor(){
		super()
		this.todos=[
			{name:'Apple',id:1},
			{name:'Google',id:2},
			{name:'Facebook',id:3}
		]
	}

	createTodo(name){ 
		const id=Date.now();
		this.todos.push({
			name,
			id
		});
		this.emit("change");
	}
	handleActions(action){
		switch(action.type){
			case "CREATE_TODO":{
				this.createTodo(action.name);
			}
		}
	}

	getAll(){
		return this.todos;
	}
}

const todoStore=new TotoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
//window.dispatcher=dispatcher;
export default todoStore;