# monster-chat
The Monster Chat system

In order to start the system, run `npm start` in this root folder. It will boot up Webpack in order to bundle the client code and then trigger hot-pack reloads to be activated. This will be running on http://localhost:8081, which is where the user should navigate to in order to connect. The same script will spin up a Socket.IO server located at http://localhost:3000, which is what the client bundle will connect to when landing on http://localhost:8081.
