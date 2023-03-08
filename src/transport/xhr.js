const url = "http://localhost:8080/myApp-1.0-SNAPSHOT/api/"
export function del(method, URL,header,login) {
    fetch(url+URL, {
        method: method,
        headers: { 'Content-Type': header },
        body: login
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
// all "/login""/products"
// admin "/products/adding" "/products/deleting/{id}"
//user "/basket" /basket/adding/{id}" "/basket/deleting/{id}"