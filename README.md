# Samsung Smart TV Remote

Made with the [samsung-remote](https://github.com/natalan/samsung-remote) module.

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
  "port": "3000"
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

# Have fun!
Open the Website by calling the IP of your server and the port you have chosen. Then **press connect TV** to initialize the connection.

# Help me improving!
If you have a bug to report or a feature request, don't hesitate to contact me!


# Screenshot of the Website
![alt text](https://cloud.corusm.de/index.php/apps/files_sharing/publicpreview/sG8z4LGr7ZYBQLt?x=1875&y=589&a=true&file=download.png&scalingup=0)
