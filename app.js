function addItem(){
	var task = document.getElementById('task').value;
	if(task != ''){
		var ul = document.getElementById('list');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(task));
		ul.appendChild(li);
		document.getElementById('task').value = '';
		li.onclick = removeItem;
	}
}

function removeItem(e) {
	e.target.remove();
}

document.body.onkeyup = function(e){
	if(e.keyCode == 13) {
		addItem();
	}
}

