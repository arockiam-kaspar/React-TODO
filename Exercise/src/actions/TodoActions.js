import dispatcher from '../dispatcher';

export function createTodo(name){
	dispatcher.dispatch({
		type:'CREATE_TODO',
		name
	})
}

export function deleteTodo(name){
	dispatcher.dispatch({
		type:'DELETE_TODO',
		id
	})
}