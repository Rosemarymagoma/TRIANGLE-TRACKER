
function triangleTracker() {

var lengthA = parseInt(document.getElementById('a').value);
var lengthB =parseInt(document.getElementById('b').value);
var lengthC = parseInt(document.getElementById('c').value);
var outputs = document.getElementById("outputs");
if (lengthA==lengthB&&lengthB==lengthC&&lengthC==lengthA) {
    outputs.textContent ="Equilateral";
} else if (lengthA==lengthB||lengthB==lengthC||lengthC==length) {
    console.log("Isosceles");
} else if (lengthA!==lengthB&&lengthB!==lengthC&&lengthC!==lengthA) {
    console.log("scalene");
} else {
    console.log("Not a triangle");
}

}
