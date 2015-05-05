![](http://i.telegraph.co.uk/multimedia/archive/00999/Tea-Biscuits_999906c.jpg)

#TEA - Transproation Expectation Application

##Inspiration

During [HackCU](http://hackcu.org), tea and biscuits were our inspiration to keep going, thus we created an app in their honour. TEA: it might not cure cancer, but it'll get you on the bus.

##How it works

TEA is delightful Android app that guides the user through figuring out which Denver metro area bus or train they should get on, when it is coming, and updates that estimate in real-time based on data pulled from other people who have recently taken the same bus.

It's incredibly simple to use: you'll choose a bus route and a direction (pulled from up to date RTD listings), a preferred departure time, and a stop on that route where you'd like to be picked up. Then you land on a timer (which displays the estimated time until the bus gets to you), which increments and decrements based on the input of other users in transit who have recently taken the same route.

Additionally, we push updates to the Pebble, a smart watch, so that when the bus is late or when the bus is almost there, your Pebble will display an alert and vibrate.

##Installation

###Dependencies
You must have Node installed before running this application

###Development

1. Download the files

2. Install Node dependencies
  ```bash
  npm install
  ```

3. Install Bower dependencies
  ```bash
  bower install
  ```

4. Run gulp to start the node server
  ```bash
  gulp
  ```
