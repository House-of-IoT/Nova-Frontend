import React, { Component } from 'react'

export default class StateViewer extends Component<any,any> {

    begin_request(type_of_basic_state:string, target_string:string){
        if(this.props.selected_server != "No Server Selected"){
            this.props.set({type_of_basic_state:type_of_basic_state,loading_content:true});
            this.props.client.request_server_state_or_config(this.props.selected_server, target_string);
        }
    }

    render() {
        return (
            <div id= "state-viewer">
                <h1>State Viewer</h1>
                <div id = "state-viewer-inner">
                    <button onClick = {()=>{
                        this.begin_request("Deactivated","servers_deactivated_bots");
                    }}> Deactivated Bots</button>
                    <button onClick = {()=>{
                          this.begin_request("All Devices","servers_devices");
                    }}>All Devices</button>
                    <button>Notification Contacts</button>
                    <button onClick = {()=>{
                        this.begin_request("BannedIps","servers_banned_ips");
                    }}>Banned Ips</button>
                </div>
            </div>
        )
    }
}
