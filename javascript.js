let name = document.getElementById('name');
console.log(name);

let colors = [ '#a5f2f3', 'red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'purple' ];

let i = 0;

function randomColor() {
	name.style.color = colors[i];

	i++;
	if (i > 8) {
		i = 0;
	}
}

function start() {
	setInterval(function() {
		randomColor();
	}, 100);
}

start();
