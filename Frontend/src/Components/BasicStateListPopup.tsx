import React, { Component } from 'react'
import BasicStateListing from './BasicStateListing'

export default class BasicStateListPopup extends Component<any,any> {

    map_elements(){
        if(this.props.data == ""){
            return(<h1>No Data</h1>);
        }

        let parsed_data = JSON.parse(this.props.data);
        //array of data
        if (this.props.type == "Deactivated" || this.props.type == "BannedIps"){
            for(let name of parsed_data){
                return(
                    <BasicStateListing data = {name}/>
                );
            }
        }
        else{
            let keys = Object.keys(parsed_data);
            console.log(keys);
            //key value pair of data.
            //formatting name and type as the data for the contact listing
            let data_strings = [];
            keys.map((key:any)=>{
                let data_string = `${key}(${parsed_data[key]})`;
                data_strings.push(data_string);
            })
            for(let data_string of data_strings ){
                return(
                    <BasicStateListing data = {data_string}/>
                );
            }
        }
    }

    render() {
        return (
            <div id = "basic-state-list-wrapper" className = "popup-wrapper" 
            style = {{display:(this.props.state? "block":"none")}}>
                <div id = "basic-state-list" > 
                    <h1>{this.props.type}</h1>
                    <div id = "basic-state-data">
                        {this.map_elements()}
                    </div>
                </div>
            </div>
        )
    }
}


