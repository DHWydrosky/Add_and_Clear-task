let li= document.createElement('li');
li.className = 'collection-item';

li.appendChild(document.createTextNode("hello ijh"));

document.querySelector('ul.collection').appendChild(li);
let ba = document.createElement('li');
//ba.className = 'collection-item';

//ba.appendChild(document.createTextNode("hello jhjdiud"));
let yu = document.querySelectorAll('li');
let yui = Array.from(yu);
document.querySelector('ul.collection').insertBefore(ba,li);
let ul= document.querySelector('ul');
const btn = document.querySelector('.clear-tasks');
btn.addEventListener('click', function(e){
	  e.preventDefault();
	  yui.forEach(elem => elem.remove());
});

let ni = document.createElement('li');
ni.className = 'collection-item';

let a = document.createElement('a');
a.className= 'delete-item secondary-content';

let i = document.createElement('i');
i.className=('fa fa-times');

let valeur = document.querySelector('#task').value;





let btnAdd = document.querySelector('input.btn');
btnAdd.addEventListener('click', function(e){
	  e.preventDefault();
	  if(valeur!=''){
	  
	  let ni = document.createElement('li');
ni.className = 'collection-item';

let a = document.createElement('a');
a.className= 'delete-item secondary-content';

let i = document.createElement('i');
i.className=('fa fa-times');

let valeur = document.querySelector('#task').value;

a.appendChild(i);
ni.appendChild(a);
ni.appendChild(document.createTextNode(valeur));

document.querySelector('ul.collection').appendChild(ni);
	  }
	  
});

