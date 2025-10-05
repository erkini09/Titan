var a = parseInt(prompt("1-ci dəyişəni daxil edin"))
var b = parseInt(prompt("2-ci dəyişəni daxil edin"))

function gcd(a, b) {
    while (a !== b ){
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
alert(lcm(a, b));