var sual = document.querySelector('input');

var başlıq = document.querySelector('h1');
var şəkil = document.querySelector('img');
var kontent = document.querySelector('div');

sual.addEventListener('keypress', (k) => {
    if (k.key == 'Enter') {
    const url = "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
        origin: "*",
        action: "parse",
        page: sual.value,
        format: "json",
    });

fetch(url)
    .then(req => req.json())
    .then(json => {
        başlıq.innerText = json['parse']['title'];
        kontent.innerHTML = json['parse']['text']['*']
    });
}
});