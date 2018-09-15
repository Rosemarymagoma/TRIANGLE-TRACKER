
function triangleTracker() {

var lengthA = parseInt(document.getElementById('a').value);
var lengthB = parseInt(document.getElementById('b').value);
var lengthC = parseInt(document.getElementById('c').value);
var outputs = document.getElementById("outputs");
if(lengthA >= (lengthB+lengthC) || lengthB >= (lengthA+lengthC) || lengthC >= (lengthB+lengthA)) {
  outputs.textContext="Not a triangle";
} else if (lengthA == lengthB && lengthB== lengthC && lengthC == lengthA) {
    console.log("Equilateral");
} else if (lengthA == lengthB || lengthB == lengthC || lengthC == lengthA) {
    console.log("Isosceles");
} else (lengthA !== lengthB && lengthB !== lengthC) {
    console.log("Scalene");
}

}
