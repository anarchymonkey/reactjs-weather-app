const express = require('express'),
      bodyParser = require('body-parser')
      request = require('request')
let app = express();
let port = 3000 || process.env.PORT;
let parsedJSON;
let storeWeatherData  = new Object();

request("http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&APPID=4ed65131aeb0cedda16daaa9f60d912e",(err,data)=>{
    parsedJSON = JSON.parse(data['body']);
    storeWeatherData = {
        weatherConditions : parsedJSON['list'][0]['weather'],
        maxTemp : parsedJSON['list'][0]['main']['temp_max'],
        minTemp : parsedJSON['list'][0]['main']['temp_min'],
        time : parsedJSON['list'][2]['dt_txt']
    }
    console.log(parsedJSON['list'][0]['main']);
    console.log(storeWeatherData.time)
});
app.listen(port,'127.0.0.1',(err)=>{
        if(err){
            
            throw new err;
        }
        console.log(`server started at port {port}`);
});