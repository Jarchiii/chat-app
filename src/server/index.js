const app = require('http').createServer()
const io = module.exports.io = require('socket.io')(server)
const cors = require("cors");

const PORT = process.env.PORT || 3231

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials : true,
  
  
    /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
    optionsSuccessStatus: 200
  };
  
  // cors middle on
  app.use(cors(corsOptions));


const SocketManager = require('./SocketManager')
io.on('connection' , SocketManager)

server.listen(PORT, () => {
    console.log("Connected to port:", PORT)
})