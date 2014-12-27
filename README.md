# Text-To-Speech door detection

One of the "issues" we have at home is that we want to know when a specific door has been opened. We all know the door bell we've been using in shops for ages. When a customer enters the shop a bell will ring and the shop owner gets notified that someone entered; the bell was traditionally placed above the entrance door. This is basicaly the behaviour we want, but nowadays we have more advanced technologies to notify someone: we could trigger a wireless alarm, send a notification (mail/Growl/PubNub) to our smartphone, etc.

## The purpose of this project

This project is a simple security system using two Raspberry Pi's and a set of door magnets. The idea is that one Raspberry Pi will be **controlling the magnet** and will send a message to the second Raspberry Pi which in its turn will **trigger an alarm** when it received the message.

## What do you need for this project?

* Two working Raspberry Pi's with SD card and 5V charger.
* Arch Linux on the SD cards.
* A network connection (LAN or WLAN)
* A set of [magnets](http://www.adafruit.com/products/375)
* An [audio device](http://thepihut.com/products/mini-portable-speaker-for-the-raspberry-pi).

## Let's get started

Please read following [tutorial](http://blog.cedricve.me/home-surveillance-magnetic-door-protection-with-text-to-speech), you will find a complete explanation and setup.