var todoItems={};

function addTodo() {
	var todoText=document.getElementById('newTodoInput').value;
	if (todoText=='') return;	
	todoItems[todoText]=0;
	document.getElementById('newTodoInput').value='';
	redrawTodos();
}

function proccessTodo(thisElem) {
	var todoText=thisElem.innerText;
	todoItems[todoText]=1;
	console.log(todoItems[todoText]);
	redrawTodos();
}

function redrawTodos() {
	var myElement=document.getElementById('todosArea');
	var newElementHtml='';
	for (todoText in todoItems) {
		if (todoItems[todoText]!=0) continue;
		newElementHtml+='<div class="singleTodoItem" onClick="proccessTodo(this);">'+todoText+'</div>';
	}
	myElement.innerHTML=newElementHtml;

	localStorage.savedTodoItems=JSON.stringify(todoItems);
}

window.onload = function() {
	if (localStorage.savedTodoItems!=undefined) {
		todoItems=JSON.parse(localStorage.savedTodoItems);
		redrawTodos();
	}  
}