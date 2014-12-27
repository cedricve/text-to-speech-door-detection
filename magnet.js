// Import libraries
var net = require("net");
var gpio = require("pi-gpio");
var async = require("async");

// Variables
var state = false; // initial state is a closed door.
var doorPin = 11; // magnet is attached to GPIO pin 11.
var delay = 2000; // we check the GPIO pin every 2 seconds.

// Make a connection with the listener.
var listenerIp = '192.168.0.146'; // the listener has this IP address.
var listenerPort = 1337; // the listener is running on this port.
var client = new net.Socket();
client.connect(listenerPort, listenerIp);

// Endless loop..
async.whilst(
    function () { return true; },
    function (callback)
    {
        // Open GPIO pin
        gpio.open(doorPin, "input pullup", function(err)
        {
            // Read from the GPIO pin
            gpio.read(doorPin, function(err, value)
            {
                // Check if the state has been changed, this means that
                // a transition occured from an opened door to a closed door
                // or vice versa. We need this check because we don't want to
                // spam the listener with messages. We only want to send a message
                // once, when the door has been opened or closed.
                if(state != value)
                {
                    // If pin is low, send a TCP/IP packet to the listener.
                    if(value == false)
                    {
                        client.write('door has been closed');
                        console.log('door has been closed');
                    }
                    else
                    {
                        client.write('door has been opened');
                        console.log('door has been opened');
                    }
                    state = value;
                }
                // Close the pin again.
                gpio.close(doorPin);
            });
        });
        // Wait a little bit..
        setTimeout(callback, delay);
    },
    function (err) {}
);