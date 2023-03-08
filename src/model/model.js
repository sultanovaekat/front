import { del, post, put } from "../transport/xhr.js";

class Product {
    constructor(id, name, parametrs, total) {
        this._id = id
        this._name = name;
        this._parametrs = parametrs;
        this._total = total;
    }

    get id() {
        return this._id;
    }
    get parametrs() {
        return this._parametrs;
    }
    get product() {
        return this._product;
    }
    get total() {
        return this._total;
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
        del("PUT", URL, "text/plain;charset=UTF-8", userName)

}

export function addProductToProducts(id) {
    URL = "adding/" + id;

    return new Promise((resolve) => {
        put("PUT", URL)
            .then(response => {
                resolve(response.text())
            });
    });

}

export function delProductFromProducts(id) {
    URL = "api/basket/deleting/"+id;
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
// all "/login""/products"
// admin "/products/adding" "/products/deleting/{id}"
//user "/basket" /basket/adding/{id}" "/basket/deleting/{id}"