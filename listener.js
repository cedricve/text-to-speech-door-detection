// Import libraries
var net = require('net');
var say = require('say');

// Variables
var listenerPort = 1337;

// Start a TCP Server
net.createServer(function (socket)
{
    // Handle incoming messages from the magnet controller.
    socket.once('data', function (data)
    {
        // Translate the message from the magnet controlelr to speech
        // Speech will be send to audio device.
        say.speak('voice_kal_diphone', data);
    });

}).listen(listenerPort);
 

// Put a friendly message on the terminal of the server.
console.log("Door listener running at port " + listenerPort + "\n");
