var x = parseFloat(prompt("x=?"))
var y = parseFloat(prompt("y=?"))
var r1 = parseFloat(prompt("1-ci dairənin radiusu"))
var r2 = parseFloat(prompt("2-ci dairənin radiusu"))
alert(Math.sqrt(y*y+x*x))
if ( Math.sqrt(y*y+x*x)>r1+r2) {
    alert("0 yerdə kəsişir")
} else if( Math.sqrt(y*y+x*x)==r1+r2) {
    alert("1 yerdə kəsişir")
} else {
    alert("2 yerdə kəsişir")
}
