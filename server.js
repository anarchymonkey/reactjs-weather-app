const express = require('express'),
      bodyParser = require('body-parser')
      request = require('request')
let app = express();
let port = 3000 || process.env.PORT;
let parsedJSON;
let storeWeatherData  = new Object();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/',(req,res)=>{

});

app.get('/',(req,res)=>{
    request("http://api.openweathermap.org/data/2.5/forecast?q=Kolkata&APPID=4ed65131aeb0cedda16daaa9f60d912e",(err,data)=>{
    parsedJSON = JSON.parse(data['body']);
    storeWeatherData = {
        weatherConditions : parsedJSON['list'][0]['weather'],
        maxTemp : parsedJSON['list'][0]['main']['temp_max'],
        minTemp : parsedJSON['list'][0]['main']['temp_min'],
        time : parsedJSON['list'][2]['dt_txt']
    }
    console.log(parsedJSON);
    console.log(storeWeatherData.maxTemp)
});
    res.send('sending the json file')
});
app.listen(port,'127.0.0.1',(err)=>{
        if(err){
            
            throw new err;
        }
        console.log(`server started at port {port}`);
});