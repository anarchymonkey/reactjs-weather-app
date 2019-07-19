import  React,{ Component } from 'react';
import axios from 'axios';

class PlayWithData extends Component{
    state = {
        users : [],
        
    }
    componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Kolkata&APPID=4ed65131aeb0cedda16daaa9f60d912e')
        .then((res)=>{
                const data = res.data;
                let arr = []
                for(let i = 0 ; i < data.list.length; i++){
                console.log(data.list[i].weather[0].description)
                arr.push(data.list[i].weather[0].description)
                

                this.setState({users:arr})
                
                    console.log("The users list");
                    console.log(this.state.users);
                }
                 
        })
    }
        render(){

            const users = this.state.users;
            const list = users.map(values=>{
                    return(
                        <div>
                        <ul id="aniket"><li>{values}</li></ul>
                        </div>
                    )
                        })

            return(<div>{list}</div>)}
        }


export default PlayWithData;