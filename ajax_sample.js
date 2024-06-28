let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const videoArea = document.getElementById("video");

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'ajax.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
            changeVideo();
        }
    };
    xhr.send();
}

function changeVideo() {
    if (data.length === 0) {
        getData();
    } else {
        const videoData = data[number];
        titleArea.textContent = videoData.title;
        videoArea.src = videoData.url;
        number = (number + 1) % data.length;
    }
}

button.addEventListener('click', changeVideo);

window.onload = changeVideo;
