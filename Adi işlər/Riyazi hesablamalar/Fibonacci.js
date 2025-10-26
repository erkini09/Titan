var n = parseInt(prompt("Fibonacci ardıcıllığının neçənci üzvünü görmək istəyirsiniz?"))

function fibonacci_rekursiv(n){
    if  (n <= 0){
        print("0")
    } else if (n == 1) {
        print("1")
    } else {
        return fibonacci_rekursiv(n-1) + fibonacci_rekursiv(n-2)
}}

