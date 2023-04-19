const url = "http://localhost:8080/myApp-1.0-SNAPSHOT/api/"
export function del(method, URL) {
    fetch(url+URL, {
        method: method
    });
}
export function put(method, URL, header,login) {
    fetch(url+URL,{
        method: method,
        headers: { 'Content-Type': header },
        body: login
    });
}

export function post(method, URL, header, object) {
    return fetch(url+URL, {
        method: method,
        headers: { 'Content-Type': header },
        body: object
    })
}
export function get(method, URL) {
    return fetch(url+URL, {
        method: method
    })
}
export function Websocket(func){
    let wsID = localStorage.getItem("login")
    let ws = new WebSocket('ws://localhost:8080/myApp-1.0-SNAPSHOT/delivery');
    ws.onopen = () => {
        ws.send(wsID);
    };
    ws.onmessage = () => {
        func();
        ws.close();
    }
}
// all "/login""/products"
// admin "/products/adding" "/products/deleting/{id}"
//user "/basket" /basket/adding/{id}" "/basket/deleting/{id}"