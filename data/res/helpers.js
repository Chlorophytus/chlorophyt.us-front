async function tpGet(stag) {
    var promise = new Promise((y, n) => { 
        var xhr = new XMLHttpRequest();
        xhr.timeout = 1000;
        xhr.responseType = 'json';
        if(stag != null) {
            xhr.open("GET", `https://api.chlorophyt.us/v0_3/pages/${String(stag)}`, true);
        } else {
            xhr.open("GET", `https://api.chlorophyt.us/v0_3/pages`, true);
        }
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

async function tmGet() {
    var promise = new Promise((y, n) => { 
        var xhr = new XMLHttpRequest();
        xhr.timeout = 1000;
        xhr.responseType = 'json';
        xhr.open("GET", `https://api.chlorophyt.us/v0_3/motd`, true);
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

