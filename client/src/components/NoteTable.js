import React from "react";
import compromizer from "../assets/compromizer";

class NoteTable extends React.Component{
    state = {notesInKey: ""}
    componentDidUpdate(){
        if(this.props.notes !== "" && this.props.modeData !== "no data yet..."){
            const comp = compromizer(this.props.notes, this.props.modeData);
            this.difference(comp)
        }
    }

    difference(data){
        if(this.state.notesInKey[0] === data[0] && this.state.notesInKey[1] === data[1] && this.state.notesInKey[2] === data[2]){
            console.log('state already up to date.')
        } else {
            this.setState({notesInKey: data})
        }
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
        console.log(this.props)
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
                                    {this.formatter(this.state.notesInKey)}
                                </tbody>
                            </table>
                        </div>
                        <div className = "col-2"></div>
                    </div>
                </div>
            )
        }
    }
}

export default NoteTable