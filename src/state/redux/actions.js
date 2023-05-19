export const ACTIONS_TYPES = {
    LOGIN:'login',
    LOGOUT:'logout'
};
const action = () => {
    return {type:'',payload:{}};
} ;



export const  ACTIONS_CREATORS = {
    LOGIN: () => {
        let a = action();
        a.type = ACTIONS_TYPES.LOGIN;
        return a;
    },
    LOGOUT: () => {
        let a = action();
        a.type = ACTIONS_TYPES.LOGOUT;
        return a;
    }
};