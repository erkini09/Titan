var a = parseInt(prompt("Böyük tərəfi tərəfi daxil edin."))
var b = parseInt(prompt("Orta tərəfi tərəfi daxil edin."))
var c = parseInt(prompt("Kiçik tərəfi tərəfi daxil edin."))

if (a + b > c && a + c > b && b + c > a && a-b < c && a-c < b && b-c < a) {
    alert("Bu ədədlərlə üçbucaq düzəltmək olar.")
} else {
    alert("Bu ədədlərlə üçbucaq düzəltmək olmaz.")
}