async function tGet(stag) {
    var promise = new Promise((y, n) => { 
        var xhr = new XMLHttpRequest();
        xhr.timeout = 1000;
        xhr.responseType = 'json';
        xhr.open("GET", `https://api.chlorophyt.us/v0_2/text/${stag}`, true);
        xhr.addEventListener('load', (event) => {
            y(xhr.response);
        });
        xhr.addEventListener('error', (event) => {
            n("error");
        });
        xhr.addEventListener('timeout', (event) => {
            n("timeout");
        });
        xhr.send();
    });
    return promise;
}

async function lGet(element) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    xhr.responseType = 'json';
    xhr.open("GET", `https://api.chlorophyt.us/v0_2/list/${element.id}/`, true);
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
