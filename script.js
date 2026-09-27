function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const p1 = s1.toLowerCase();
	const p2 = s2.toLowerCase();

	return p1.indexOf(p2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));


