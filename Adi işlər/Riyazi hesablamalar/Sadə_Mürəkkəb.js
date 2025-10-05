var a = parseInt(prompt("Ədəd daxil edin"));

function Sadə_Mürəkkəb(a) {
    if (a <= 1) {
        return "Tapmaq mümkün deyil";
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return "Mürəkkəb ədəddir";
        }
    }
    return "Sadə ədəddir";
}

alert(Sadə_Mürəkkəb(a));