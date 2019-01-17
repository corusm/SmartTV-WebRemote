# Samsung Smart TV Remote

Made with the [samsung-remote](https://github.com/natalan/samsung-remote) module. This is a Instruction for using this app either for hosting a website with a tv remote or a solution for conneting the **google home / assistant** to your samsung smart tv and control everything with it.

# Documentation

## Install / Self Hosting

First install the nodejs and npm packages
```
sudo apt-get install nodejs && sudo apt-get install npm
```

then clone the git repos to your Server
```
git clone https://github.com/corusm/SmartTV-WebRemote.git
```

## Install Dependencies
```
npm install
```

## Add Parameters
Add your smartTV IP and the port your webserver should run on to the **config.json** file
```
{
  "tvip": "1.1.1.1",
  "port": "80",
  "portopen" : "3030"
}
```


## Log
Full console log is saved in the **info.log** file

## Safety
The Smart TV has been made with caring about security. Right now it's ment to run in the same network as the TV. I am looking forward to integrate some tunnel service to this server.

## Run the Server
Navigate to the directory where you have installed the bot (where the **index.js** file is located) and run these commands:

1. Start Server: `npm start`
2. Stop Server: `npm stop`
3. Test Server: `npm test`

## Add it to google assistant
For adding the TV remote to your google assistant do as following:

1. serveo.net
```
ssh -R yourappname:80:localhost:3030 serveo.net
```
2. Add commands to [IFTTT](https://ifttt.com) =>
Domain: https://yourappname.serveo.net/path (paths can be found in /public/client.js)
### Example:
```
fetch('/turnon', {method: 'POST'})
```
/turnon => https://yourappname.serveo.net/turnon

### Tutorial IFTTT Setup
![alt text](https://github.com/corusm/SmartTV-WebRemote/blob/master/recources/tutorial.gif)
#### Now talk to your google home!

# Have fun!
Open the Website by calling the IP of your server and the port you have chosen. Then **press connect TV** to initialize the connection.

# Help me improving!
If you have a bug to report or a feature request, don't hesitate to contact me!


# Screenshot of the Website
![alt text](https://github.com/corusm/SmartTV-WebRemote/blob/master/recources/website.png)
