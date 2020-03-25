async function tGet(element, errorText) {
    const XHR = new XMLHttpRequest();
    XHR.timeout = 1000;
    XHR.open("GET", `http://api.chlorophyt.us/v0_1/text/${element.id}`);
    XHR.addEventListener('load', event => {
        return event.json();
    }).then(json => {
        if(json.text) {
            element.innerText = json.text;
        }
    });
    XHR.addEventListener('error', event => {
        element.innerText = errorText;
    });
    XHR.addEventListener('timeout', event => {
        element.innerText = errorText;
    });
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send();
}

async function lGet(element) {
    const XHR = new XMLHttpRequest();
    XHR.timeout = 1000;
    XHR.open("GET", `http://api.chlorophyt.us/v0_1/list/${element.id}/`);
    XHR.addEventListener('load', event => {
        return event.json();
    }).then(json => {
        const item = document.createElement("li");
        item.innerText = "unimplemented";
        element.appendChild(item);
    });
    
    XHR.addEventListener('error', event => {
        const item = document.createElement("li");
        item.innerText = ". . .";
        element.appendChild(item);
    });
    XHR.addEventListener('timeout', event => {
        const item = document.createElement("li");
        item.innerText = ". . .";
        element.appendChild(item);
    });
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send();
}