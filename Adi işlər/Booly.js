var Booly = prompt("Booly cədvəlində hansı əməliyyatı yerinə yetirmək istəyirsiniz? (AND, OR, NOT, XOR, NAND, NOR, XNOR)").toUpperCase()
var x = prompt("Birinci ədədin qiymətini daxil edin:(1 və ya 0)")
var y = prompt("İkinci ədədin qiymətini daxil edin: (1 və ya 0)")

if (Booly = "AND") {
    if (x == 1 && y == 1) {
        alert("Nəticə: 1")
    } else {
        alert("Nəticə: 0")
    }
} else if (Booly = "OR") {
    if (x == 0 || y == 0) {
        alert("Nəticə: 0")
    } else {
        alert("Nəticə: 1")
    }
} else if (Booly = "NOT") {
    if (x == 1) {
        alert("Nəticə: 0")
    } else {
        alert("Nəticə: 1")
    }
} else if (Booly = "XOR") {
    if (x != y) {
        alert("Nəticə: 1")
    } else {
        alert("Nəticə: 0")
    }
} else if (Booly = "NAND") {
    if (x == 1 && y == 1) {
        alert("Nəticə: 0")
    } else {
        alert("Nəticə: 1")
    }
} else if (Booly = "NOR") {
    if (x == 0 && y == 0) {
        alert("Nəticə: 1")
    } else {
        alert("Nəticə: 0")
    }
} else if (Booly = "XNOR") {
    if (x == y) {
        alert("Nəticə: 1")
    } else {
        alert("Nəticə: 0")
    }
} else {
    alert("Yanlış əməliyyat daxil etdiniz.")
}