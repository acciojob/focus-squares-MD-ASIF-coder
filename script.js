//your JS code here. If required.

const sqr = document.querySelectorAll('.square');

sqr.addEventListener = ('hover', () => {
	// sqr.style.background-color: ''#6F4E37';
	
	for (let i = 2; i <= 3; i++)
		{
			let box = document.getElementbyId(`#square${i}`);
			box.style.background-color: '#6F4E37';
		}
})