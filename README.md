# 💬 TJ Talk
A real-time web-based chat application built with Node.js and WebSocket.
TJ Talk provides a simple and lightweight environment for real-time communication, including public chat, private messaging, user presence tracking, and a Persian RTL interface.
________________________________________
✨ Features
•	🔐 User login interface
•	💬 Real-time public chat
•	🔒 Private messaging between users
•	👥 Real-time user list
•	🟢 Online / Offline user status
•	🔢 Connected user count
•	🕐 Message timestamps
•	⌨️ Send messages using the Enter key
•	🔄 Switch between public and private conversations
•	⚡ Real-time communication using WebSocket
•	🇮🇷 Persian language support
•	↔️ Right-to-Left (RTL) interface
•	🎨 Clean and lightweight user interface
________________________________________
🛠️ Technologies
Technology	Purpose
HTML5	Application structure
CSS3	User interface styling
JavaScript	Client-side logic
Node.js	Server-side runtime
WebSocket	Real-time communication
ws	WebSocket server implementation
Express	Node.js web framework
________________________________________
📂 Project Structure
TJ-Talk/
│
├── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
node_modules/ should not be committed to the repository. Add it to .gitignore.
________________________________________
⚙️ Installation
1. Clone the repository
git clone YOUR_REPOSITORY_URL
Navigate into the project directory:
cd TJ-Talk
2. Install dependencies
npm install
3. Start the WebSocket server
node server.js
The WebSocket server runs on:
ws://localhost:5000
4. Open the application
Open index.html in your browser.
After entering a username and password, the client establishes a WebSocket connection with the server.
________________________________________
🏗️ Architecture
The application uses a simple client-server architecture:
┌──────────────────────┐
│       Browser        │
│      index.html      │
└──────────┬───────────┘
           │
           │ WebSocket
           ▼
┌──────────────────────┐
│      Node.js         │
│   WebSocket Server   │
│      server.js       │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
┌──────────┐ ┌──────────┐
│  Public  │ │ Private  │
│   Chat   │ │ Messages │
└──────────┘ └──────────┘
________________________________________
💬 Public Chat
By default, users are connected to the public chat.
Messages sent without selecting another user are broadcast to connected clients through the WebSocket server.
________________________________________
🔒 Private Messaging
Users can select another connected user from the sidebar to start a private conversation.
Private messages are routed by the server to the selected recipient rather than being broadcast to every connected client.
________________________________________
👥 User Management
TJ Talk maintains a list of connected users and their current connection status.
The interface displays:
•	Username
•	Online status
•	Offline status
•	Number of users
When a client disconnects, the server updates the user’s status and broadcasts the updated user list.
________________________________________
🔌 WebSocket Communication
The application uses the ws package to create the WebSocket server.
The server listens on port 5000:
const wss = new WebSocket.Server({ port: 5000 });
The client connects using:
new WebSocket("ws://localhost:5000");
________________________________________
📡 Message Types
The application currently handles several WebSocket message types:
Join
Used when a new user enters the chat.
{
  "type": "join",
  "username": "username"
}
Public Message
Used to send a message to the public chat.
{
  "type": "message",
  "username": "username",
  "message": "Hello!",
  "isPrivate": false
}
Private Message
Used to send a message to a specific user.
{
  "type": "message",
  "username": "username",
  "message": "Hello!",
  "isPrivate": true,
  "to": "recipient"
}
________________________________________
🖥️ User Interface
The frontend contains:
•	Login screen
•	User sidebar
•	User counter
•	Online / Offline indicators
•	Chat header
•	Message area
•	Message timestamps
•	Message input
•	Send button
•	Public/private chat switching
The interface is designed with RTL support for Persian-language users.
________________________________________
🔐 Security Considerations
This project is currently a lightweight development/learning implementation.
Before deploying it to a production environment, additional security measures should be considered, including:
•	Secure authentication
•	Password hashing
•	Input validation
•	XSS protection
•	Rate limiting
•	Access control
•	Secure WebSocket connections using wss://
•	Server-side validation of usernames and messages
•	Persistent and secure user management
________________________________________
🚀 Future Improvements
Possible improvements for future versions include:
•	📁 File sharing
•	🖼️ Image sharing
•	🎤 Voice messages
•	😀 Emoji reactions
•	🎞️ GIF and sticker support
•	🔔 Notifications
•	💾 Database-backed message history
•	👤 User profiles
•	✍️ Typing indicators
•	🗑️ Message deletion
•	✏️ Message editing
•	📌 Message pinning
•	👥 Group conversations
•	📱 Fully responsive mobile interface
•	🌙 Dark / Light mode
•	🔐 Improved authentication and authorization
•	🌐 HTTPS / WSS deployment
________________________________________
📋 Requirements
Make sure the following are installed on your system:
•	Node.js
•	npm
Then install the project dependencies:
npm install
________________________________________
📦 Dependencies
The project currently uses:
{
  "express": "^5.1.0",
  "ws": "^8.18.2"
}
________________________________________
🧪 Development
Start the WebSocket server with:
node server.js
Then open:
index.html
in your browser.
For local development, the WebSocket connection is established through:
ws://localhost:5000
________________________________________
📄 License
This project is licensed under the ISC License.
________________________________________
👨💻 Project
TJ Talk
Built with:
HTML5 · CSS3 · JavaScript · Node.js · WebSocket
________________________________________
⭐ If you find this project useful, consider giving the repository a Star.
________________________________________
