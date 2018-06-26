var todos = ["Buy new turtle"];




window.setTimeout(function(){
	var input = prompt("What do you want to do?");
	while(input != "quit" ){
		if(input ==="list") {

			listTodos();

		}
		
		else if (input === "new"){
			
			addTodo();

		} 
		
		else if (input === "delete") {
			
			deleteTodo();

		}
		var input = prompt("What do you want to do?");
		
	}

	console.log("Goodbye!");

	function listTodos(){
		console.log("**********");
			todos.forEach(function(todo,i){

				console.log(i + ": " + todo);
			})
			console.log("**********");
	}

	function addTodo() {
		var newTodo =prompt("Enter new todo");
			todos.push(newTodo);

			console.log("Added Todo");
	}

	function deleteTodo() {
		var index = prompt("Enter index of todo to delete.");

			todos.splice(index,1);

			console.log("Deleted todo");
	}

},500)



