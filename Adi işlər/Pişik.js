const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_SGE70zd1v5ekM0rY1aFd7acwozvVHsnoGJe4hc9VWBIQnEEOt3dWUNQTiQz2EzyS"
    });

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    function getCat() {
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result[0].breeds[0].name);
        document.querySelector('img').src = result[0].url;
        document.getElementById('name').innerText = result[0].breeds[0].name;
        document.getElementById('description').innerText = result[0].breeds[0].description; 
        document.getElementById('origin').innerText = result[0].breeds[0].origin;
    })
    .catch(error => console.log('error', error)); 
    }

    function automaticGetCat() {
    setInterval(getCat, 6000);
    }

    getCat();
