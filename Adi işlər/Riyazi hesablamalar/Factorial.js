var a = parseInt(prompt("Dəyişəni daxil edin"))

function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

alert(factorial(a));
