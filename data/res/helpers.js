async function tGet(element, errorText) {
    var XHR = new XMLHttpRequest();
    XHR.timeout = 1000;
    XHR.open("GET", `https://api.chlorophyt.us/v0_1/text/${element.id}`);
    // XHR.addEventListener('load', event => {

    // }).then(json => {

    // });
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
    var XHR = new XMLHttpRequest();
    XHR.timeout = 1000;
    XHR.open("GET", `https://api.chlorophyt.us/v0_1/list/${element.id}/`);
    // XHR.addEventListener('load', event => {

    // }).then(json => {

    // });
    
    XHR.addEventListener('error', event => {
        const item = document.createElement("li");
        item.innerText = ". . . ";
        element.appendChild(item);
    });
    XHR.addEventListener('timeout', event => {
        const item = document.createElement("li");
        item.innerText = ". . . ";
        element.appendChild(item);
    });
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send();
}