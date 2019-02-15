function triangleTracker() {
 var A = document.getElementById("a"). value;
 var B = document.getElementById("b"). value;
 var C = document.getElementById("c"). value;

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
}
