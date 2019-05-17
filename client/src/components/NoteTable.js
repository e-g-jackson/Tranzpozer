import React from "react";
import compromizer from "../assets/compromizer";
import Staffizer from "../assets/Staffizer";
import Guitar from "../components/Guitar";


class NoteTable extends React.Component{
    state = {notesInKey: ""}
    
    componentDidUpdate(){
        if(this.props.notes !== "" && this.props.modeData !== "no data yet..."){
            const comp = compromizer(this.props.notes, this.props.modeData);
            this.difference(comp)
        }
    }

    difference(data){
        if(this.sameFinder(data) === false){
            console.log('state already up to date.')
        } else {
            this.setState({notesInKey: data})
        }
    }
    
    sameFinder(newData){
        let value = false;
        if(this.state.notesInKey.length !== newData.length){
            value = true
        } else if (this.state.notesInKey.length === newData.length){
            for (var i = 0; i < this.state.notesInKey.length; i++){
                if (this.state.notesInKey[i] !== newData[i]){
                    value = true;
                    break;
                }
            }
        }
        // console.log('value = ' + value)
        return (value)
    }

    formatter(data){
        const formattedData = data.map((x, index) => {
            return(
                // <tr key = {index}>
                    <td key = {index} className = 'col'>
                        {x}
                    </td>
                // </tr>
            )
        });
        return formattedData;
    }

    render(){
        // console.log(this.props)
        if(this.state.notesInKey === ""){
            return(
                <div className = "container">
                <div className = "row mt-4">
                    <div className = "col-2"></div>
                    <div className = "col-8">
                        <table id = "body" className = "p-2 table table-dark">
                            <thead>
                                <tr>
                                    <th scope = "col">Note data:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nothing to display, yet.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className = "col-2"></div>
                </div>
            </div>
            )
        } else {
            // console.log('this.state.notesInKey:')
            // console.log(this.state.notesInKey)
            return(
                <div className = "container">
                    
                    <div className = "row mt-4">
                        <div className = "col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                        <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div id = "staff">
                                <Staffizer />
                            </div>
                            <div>
                                <table id = "body" className = "table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope = "col">Notes in key:</th>
                                        </tr>
                                    </thead>
                                    <tbody className = "text-center">
                                        <tr className = "row" style = {{marginRight:"0px", marginLeft:"0px"}}>
                                            {this.formatter(this.state.notesInKey)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = "col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                    </div>

                    <div className = "row mt-4">
                        <div className = "col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                        <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h3>Guitar Renderizer:</h3>
                            <p>
                                If you would like to change a string's tuning, 
                                then select a new value in the dropdown menu above the string.
                            </p>
                            <Guitar 
                                noteData = {this.state.notesInKey}
                            />
                        </div>
                        <div className = "col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                    </div>
                </div>
            )
        }
    }
}

export default NoteTable