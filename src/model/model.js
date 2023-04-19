import { del, post, put, get} from "../transport/request.js";

class Product {
    constructor(id, name, parametrs, total) {
        this.id = id
        this.name = name;
        this.parametrs = parametrs;
        this.total = total;
    }

}
class Order {
    constructor(login, id, name, _status) {
        this.id = id
        this.name = name;
        this.login = login;
        this._status = _status;
    }
}
export function async_getProducts(object) {
    return new Promise((resolve) => {
        post("POST", "products", "text/plain;charset=UTF-8", object)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                resolve(_response(data));
            });
    });
}

export function async_getBasket(object) {
    return new Promise((resolve) => {
        post("POST", "basket", "text/plain;charset=UTF-8", object)
            .then((response) => response.json())
            .then((data) => {
                resolve(_response(data));
            });
    });
}

export function async_login(object) {
    return new Promise((resolve) => {
        post("POST", "login", "application/json;charset=UTF-8", object)
            .then((response) => response.json())
            .then((data) => {
                resolve((data));
            });
    });
}

export function addProductToBasket(id, userName) {
    let URL = "basket/adding/" + id;
        put("PUT", URL,"text/plain;charset=UTF-8", userName)
}

export function delProductFromBasket(id, userName) {
    let URL = "basket/deleting/" + id;
        put("PUT", URL, "text/plain;charset=UTF-8", userName)

}
export function  async_getOrders() {
    return new Promise((resolve) => {
        get("GET", "admin/orders")
            .then((response) => response.json())
            .then((data) => {
                resolve(_responseO(data));
            });
    });
}
export function  async_getOrdersUser(user) {
    return new Promise((resolve) => {
        post("POST", "user/orders", "text/plain;charset=UTF-8",user)
            .then((response) => response.json())
            .then((data) => {
                resolve(_responseO(data));
            });
    });
}
export function changeStatusDelivery(login){
    return new Promise((resolve) => {
        post("POST", "admin/delivery", "text/plain;charset=UTF-8",login)
            .then((response) => response.text())
            .then((data) => {
                resolve((data));
            });
    });
}
export function addProductToProducts(object) {
    return new Promise((resolve) => {post("POST", "products/adding","application/json;charset=UTF-8", object)
            .then((response) => response.text())
        .then((data) => {
            resolve((data));
        });
    });
}

export function delProductFromProducts(id) {
    URL = "products/deleting/"+id;
    del("DELETE", URL)
}

function _response(p) {
    if (p != null) {
        let products = [];
        for (let i = 0; i < p.length; i++) {
            products.push(new Product(p[i].id, p[i].name, p[i].parametrs, p[i].total))

        }
        return products;
    }
}
function _responseO(p) {
    if (p != null) {
        let orders = [];
        for (let i = 0; i < p.length; i++) {
            if (p[i].status==true){orders.push(new Order(p[i].user,p[i].id, p[i].name, "true" ))}
            else {orders.push(new Order(p[i].user,p[i].id, p[i].name, "false" ))}
        }
        return orders;
    }
}
// all "/login""/products"
// admin "/products/adding" "/products/deleting/{id}"
//user "/basket" /basket/adding/{id}" "/basket/deleting/{id}"