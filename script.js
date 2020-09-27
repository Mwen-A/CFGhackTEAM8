// const counters = document.querySelectorAll('.counter');
// const speed = 2000; 

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = counter.getAttribute('data-target');

//         console.log(target);
//     }
//     updateCount();
// });


const counters = document.querySelectorAll('.counter');
const speed = 20;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {
			counter.innerText = count + inc;

			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
