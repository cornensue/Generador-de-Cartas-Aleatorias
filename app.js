const cardIcons = ['♦', '♥', '♠', '♣'];
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'King', 'Queen', 'Jack']; 
const icon = document.querySelector('.icon');
const icon2 = document.querySelector('.icon2');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

window.onload = () => {}

	btn.addEventListener('click', () => {

		function generateRandomCard(arr) {
			let randomIconNumber = Math.floor(Math.random() * arr.length);

			return arr[randomIconNumber]; 
		} 

		const icons = generateRandomCard(cardIcons);

		icon.innerHTML = icons;
		number.innerHTML = generateRandomCard(cardNumbers);
		icon2.innerHTML = icons;
});
