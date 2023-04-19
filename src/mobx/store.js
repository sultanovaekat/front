import {observable, action} from "mobx";

    const store = observable({
        isLoggedIn: false,

        change: action( function change(value) {
            this.isLoggedIn = value;
        }),
    });
export function useLoginDispatcher(status) {
    return () => {
        store.change(status);}
};
export function getLoginStatus(){
    return store.isLoggedIn
}


