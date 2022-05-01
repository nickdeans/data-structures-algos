// Write a function that takes in an integer n and returns the nth fibonacci number.

const getNthFib = (n) => {
  if(n === 2) {
		return 1;
	} else if (n === 1) {
		return 0;
	} else {
		return getNthFib(n - 1) + getNthFib(n - 2);
	}
}