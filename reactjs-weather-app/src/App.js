import React from 'react';
import Form from './components/Form'
import './App.css';
import Content from './components/contents';
import TableHead from './components/RenderTableHead';
const API_KEY = "4ed65131aeb0cedda16daaa9f60d912e";

class App extends React.Component{

  state={
    temperature: [],
    city: [],
    country: [],
    humidity:[],
    description:[],
    min_temp: [],
    max_temp: [],
    date : []
  }

  callApi = async(e)=>{
    // preventing event bubbling, learnt it in second year
    e.preventDefault();
    // getting the values for city and country from event.target property.
    const city=e.target.elements.city.value;
    console.log(city);
    const country=e.target.elements.country.value;
 
    /* learnt about fetch operations from the net */
 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
 const data=await api_call.json();
 console.log(data);
 if(city && country)
 {
   console.log(data);
   let cityArray = [];
   let maxTemperature = [];
   let minTemprature = [];
   let country = [];
   let humidityArray = [];
   let descriptionArray = [];
   let dateArray = [];
   let basicTemprature = [];
   for(let i = 0 ; i < data.list.length ; i++){
 
       // getting all the list data into the description array
      country.push(data.city.name);
      cityArray.push(data.city.country);
      descriptionArray.push(data.list[i].weather[0].description);
      humidityArray.push(data.list[i].main.humidity)
      maxTemperature.push(data.list[i].main.temp_max)
      minTemprature.push(data.list[i].main.temp_min)
      basicTemprature.push(data.list[i].main.temp)
      dateArray.push(data.list[i].dt_txt)
 
   }
 
   // setting the states of all 
   // basically it means setting all the  object <key,value> pairs.
   this.setState({
     temperature: basicTemprature,
     city: country,
     country:cityArray,
     humidity:humidityArray,
     description:descriptionArray,
     max_temp:maxTemperature,
     min_temp: minTemprature,
     date: dateArray
   });
 }
 else{
   
   this.setState({
     temperature: [],
     city: [],
     country: [],
     humidity: [],
     description:[],
     max_temp: [],
     min_temp: [],
     date: []
   });
 }
  }

render(){
    let desc = this.state.description.map( (values,index)=>{
      console.log({values})
      return(
<Content  description = {values}/>
  )
})

  let humidity = this.state.humidity.map( (values,index)=>{
    return(
    <Content humidity ={values}/>
    )
  })

  let city = this.state.city.map( (values)=>{
    return(
      <Content city = {values}/>
      )
  })
  let country = this.state.country.map( (values)=>{
    return(
      <Content country = {values}/>
      )
  })
  let maxTemperature = this.state.max_temp.map( (values)=>{
    return(
      <Content maxTemp = {values}/>
      )
  })
  let minTemperature = this.state.min_temp.map( (values)=>{
    return(
      <Content minTemp = {values}/>
      )
  })
  let date = this.state.date.map( (values)=>{
    return(
      <Content date = {values}/>
      )
  })
  return (
    <div>
      <h1> Welcome To Aniket's Weather Forcast App</h1>

      <div className = {'jumbotron'}>
      <Form callApi={this.callApi}/>
      </div>
      <table className={'table'}>
        <TableHead/>

          <Content
          description = {desc}
          humidity = {humidity}
          city = {city}
          country = {country}
          maxTemp = {maxTemperature}
          minTemp = {minTemperature}
          date = {date} />

      </table>
    </div>
      
  )
}
}

export default App;
