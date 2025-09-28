// var ad = prompt("What is your name?");
// var soyad = prompt("What is your surname?");
// alert("Nice to meet you " + ad + " " + soyad + ".");
// var yaş = prompt("How old are you?");
// if (yaş < 8) {
//     alert("You are too young to start learning programming.")
// } else if (yaş <=14) {
//     alert("You can learn programming at Div Kids.")
// } else {
//     alert("You can take classes at Div Academy.")
// }
// var reng = prompt("What is your favorite color?");
// document.querySelector('body').style.backgroundColor = reng;
// if (reng == "black" || reng == "navy" || reng == "darkblue" || reng == "blue") {
//     document.querySelector('body').style.color = "white";
// }

// if (reng == "white" || reng == "lightyellow" || reng == "lightgreen" || reng == "lightblue") {
//     document.querySelector('body').style.color = "black";
// }
// var ay = prompt("What month were you born in?");

// if (ay == "12" || ay == "1" || ay == "2") {
//     alert("You were born in winter.")
// } else if (ay == "3" || ay == "4" || ay == "5") {
//     alert("You were born in spring.")
// } else if (ay == "6" || ay == "7" || ay == "8") {
//     alert("You were born in summer.")
// } else {
//     alert("You were born in autumn.")
// }
// var a= 0;
// var ədəd = parseInt(prompt('Bir ədəd daxil edin.'))
// while (a < ədəd) {
//     alert(a);
//     a++;
// }

// Create 99 different colored squares
for (var i = 0; i < 24; i++) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.margin = '5px';
    div.style.display = 'inline-block';
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.appendChild(div);
}

var Cavab = parseInt(prompt("How many rectangles would you like to add?"));

for (var i = 0; i < Cavab; i++) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.margin = '5px';
    div.style.display = 'inline-block';
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.appendChild(div);
}


