const inputNode = document.querySelector(".message__text");
const btnSendNode = document.querySelector(".message__send");
const btnGeoNode = document.querySelector(".message__geo");
const outputNode = document.querySelector(".output");

const wsUri = "wss://echo-ws-service.herokuapp.com"

let websocket;

const writeMessage = (text, adresser) => {
    let message = document.createElement("p");
    message.classList.add(`${adresser}`);
    message.innerHTML = text;
    outputNode.appendChild(message);
};

window.onload = () => {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(e) {
        writeMessage(`<span style="color: green;">Соединение установлено</span>`, "server");
    };
    websocket.onclose = function(e) {
        writeMessage(`<span style="color: red;">Соединение прервано</span>`, "server");
    };
    websocket.onmessage = function(e) {
        writeMessage(`${e.data}`, "server");
    };
    websocket.onerror = function(e) {
        writeMessage(`<span style="color: red;">${e.data}</span>`, "server");
    };
};

btnSendNode.onclick = () => {
    const message = inputNode.value;
    writeMessage(message, "client");
    websocket.send(message);
    inputNode.value = "";
};
