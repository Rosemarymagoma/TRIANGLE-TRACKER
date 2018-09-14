
function triangleTracker() {

var lengthA = parseInt(document.getElementById('a').value);
var lengthB =parseInt(document.getElementById('b').value);
var lengthC = parseInt(document.getElementById('c').value);
var outputs = document.getElementById("outputs");
    if (lengthA>=(lengthB+lengthC)||lengthB>=(lengthA+lengthC)||lengthC>=(lengthA+lengthB) {
        outputs.innerHTML("Not a triangle");
} else if (lengthA==lengthB&&lengthB==lengthC&&lengthC==lengthA) {
    outputs.innerHTML ="Equilateral";
} else if (lengthA==lengthB||lengthB==lengthC||lengthC==length) {
    outputs.innerHTML("Isosceles");
} else  (lengthA!==lengthB&&lengthB!==lengthC&&lengthC!==lengthA) {
     outputs.innerHTML("scalene");
} 


}
