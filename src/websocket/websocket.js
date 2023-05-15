export function webSocket(func){
    let wsID = localStorage.getItem("login")
    let ws = new WebSocket('ws://localhost:8080/myApp-1.0-SNAPSHOT/websocket');
    ws.onopen = () => {
        ws.send(wsID);
    };
    ws.onmessage = (event) => {
        func(event.data);
        ws.close();
    }

}