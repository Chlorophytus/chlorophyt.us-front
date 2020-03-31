async function tGet(element, errorText) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    xhr.responseType = 'json';
    xhr.open("GET", `https://api.chlorophyt.us/v0_1/text/${element.id}`, true);
    xhr.addEventListener('load', (event) => {
        const json = xhr.response;
        if (json.text) {
            element.innerText = json.text;
        }
    });
    xhr.addEventListener('error', (event) => {
        element.innerText = errorText;
    });
    xhr.addEventListener('timeout', event => {
        element.innerText = errorText;
    });
    xhr.send();
}

async function lGet(element) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    xhr.responseType = 'json';
    xhr.open("GET", `https://api.chlorophyt.us/v0_1/list/${element.id}/`, true);
    xhr.addEventListener('load', (event) => {
        const json = xhr.response;
        if (json.list) {
            json.list.forEach(sub => {
                const item = document.createElement("li");
                item.innerText = sub;
                element.appendChild(item);
            });
        }
    });

    xhr.addEventListener('error', (event) => {
        const item = document.createElement("li");
        item.innerText = ". . .";
        element.appendChild(item);
    });
    xhr.addEventListener('timeout', (event) => {
        const item = document.createElement("li");
        item.innerText = ". . .";
        element.appendChild(item);
    });
    xhr.send();
}