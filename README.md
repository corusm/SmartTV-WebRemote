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
git clone https://github.com/corusm/smarttv.git
```


## Add Parameters
Add your smartTV IP to the **tokens.json** file
```
{
  "tvip": "1.1.1.1",
  "port": "3000"
}
```

## Run the Server
Navigate to the directory where you have installed the bot (where the **index.js** file is located) and run these commands:

1. Start Server: `npm start`
2. Stop Server: `npm stop`
3. Test Server: `npm test`

# Have fun!
Open the Website und the IP of your server and the port you have chosen.
