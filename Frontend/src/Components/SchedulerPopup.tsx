import React, { Component } from 'react'
import CapabilityListing from './CapabilityListing';

export default class SchedulerPopup extends Component<any,any> {
    constructor(props:{}){
        super(props);
        this.state = {
            selected_capabilities:[],
            different_capabilities:{}
        }
    }

    render() {
        return (
            <div className = "popup-wrapper" id = "scheduler-popup">
                <div id = "scheduler-popup-inner"> 
                    <button id = "close-scheduler-popup">X</button>
                    <h1 id = "Select-label"> Select Bot For Scheduling</h1>
                    <select name="" id="">
                        <option  selected  disabled >Choose Bot</option>
                        {Object.keys(this.props.bots).map((key)=>{
                            return <option onSelect = {()=>{this.setState({selected_capabilities:this.state.different_capabilities[key]})}}>{key}</option>
                        })}

                    </select>

                    <input placeholder = "Datetime"></input>
                    <h2>Select the wanted action</h2>
                    <div id = "scheduling-capabilities">
                        {this.state.selected_capabilities.map((capabilitiy)=>{
                            return <CapabilityListing name = {capabilitiy}/>
                        })}
                    </div>               
                </div>                
            </div>
        )
    }
}
