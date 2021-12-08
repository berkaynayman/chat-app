import io from "socket.io-client"

let socket;

export const init = () => {
    console.log("conntecting..");

    socket = io("http://localhost:3000", {
        transports:["websocket"],
    });
    
    socket.on("connect", () => console.log("connected!"));
}