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
                <tr key = {index}>
                    <td>
                        {x}
                    </td>
                </tr>
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
                                    <th scope = "col">Notes:</th>
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
                        <div className = "col-2"></div>
                        <div className = "col-2">
                            <div id = "staff">
                                <Staffizer />
                            </div>
                            <div>
                                <table id = "body" className = "p-2 table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope = "col">Notes:</th>
                                        </tr>
                                    </thead>
                                    <tbody className = "text-center">
                                        {this.formatter(this.state.notesInKey)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = "col-6">
                            <h3>Guitar Renderizer:</h3>
                            <Guitar 
                                noteData = {this.state.notesInKey}
                            />
                        </div>
                        <div className = "col-2"></div>
                    </div>
                </div>
            )
        }
    }
}

export default NoteTable