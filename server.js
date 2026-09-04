const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5000 });

const users = [];
const statuses = [];
const clients = new Map();

wss.on("connection", (ws) => {
    console.log("New client connected");
    
    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message);
            console.log("Received message:", data);

            if (data.type === "join") {
                users.push(data.username);
                statuses.push(true);
                clients.set(data.username, ws);
                broadcast({ type: "join", username: data.username, users, statuses, timestamp: Date.now() });
            } else if (data.type === "message") {
                if (data.isPrivate) {
                    const recipientWs = clients.get(data.to);
                    if (recipientWs && recipientWs.readyState === WebSocket.OPEN) {
                        recipientWs.send(JSON.stringify(data));
                        console.log(`Private message sent to ${data.to}`);
                    } else {
                        console.log(`Recipient ${data.to} not found or not connected`);
                    }
                    if (ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify(data));
                    }
                } else {
                    broadcast({ type: "message", username: data.username, message: data.message, timestamp: data.timestamp, isPrivate: false });
                }
            }
        } catch (error) {
            console.error("Error processing message:", error);
        }
    });

    ws.on("close", () => {
        const index = Array.from(clients.entries()).findIndex(([_, client]) => client === ws);
        if (index !== -1) {
            const username = Array.from(clients.keys())[index];
            const userIndex = users.indexOf(username);
            statuses[userIndex] = false;
            clients.delete(username);
            broadcast({ type: "users", users, statuses });
            console.log(`${username} disconnected`);
        }
    });

    ws.on("error", (error) => {
        console.error("WebSocket error:", error);
    });

    ws.send(JSON.stringify({ type: "users", users, statuses }));
});

function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

console.log("WebSocket server running on ws://localhost:5000");