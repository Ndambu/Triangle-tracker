let A = parseInt(prompt("Enter your number"));
let B = parseInt(prompt("Enter your number"));
let C = parseInt(prompt("Enter your number"));

var triangleTracker =('sideA', 'sideB', 'sideC');

if (A + B <= C || B + C <= A || A + C <= B ) {

alert("This is not a triangle");

}
else if (A === B && B === C && A === C) {

alert("The triangle is an equilateral");

}
else if (A === B || B === C || A === C) {

alert("The triangle is an isosceles");

}
else {

alert("The triangle is an scalene");

}
