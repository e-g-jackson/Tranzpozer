import React, { Component } from "react";
import fretizer from "../assets/fretizer";

class Guitar extends Component {
    state = {
        noteData: "",
        formattedData: "Nothing yet"
    }

    componentDidMount(){
        console.log('Guitar.js did Mount');
        this.renderer();
    }

    componentDidUpdate(){
        console.log('Guitar.js did Update')
        if(this.props.noteData !== this.state.noteData){
            this.renderer();
        }
    }

    renderer(){
        //pass key, scale, tuning...
        // console.log('fretizer:')
        // console.log(fretizer(this.props.noteData));

        if(this.state.noteData === ""){
            this.setState({noteData: this.props.noteData})
        }
        if (this.state.formattedData === "Nothing yet" || this.state.formattedData !== fretizer(this.props.noteData)){
            let newNoteData = fretizer(this.props.noteData);
            console.log(newNoteData)
            let tableData = newNoteData.map((x, index) => {
                console.log(x[0]);
                console.log(x[1]);
                console.log(x[2]);
                console.log(x[3]);
                console.log(x[4]);
                console.log(x[5]);
                return(
                    <tr key = {index}>
                        <td>
                            {this.picChooser(x[0].inKey)}
                        </td>
                        <td>
                            {this.picChooser(x[1].inKey)}
                        </td>
                        <td>
                            {this.picChooser(x[2].inKey)}
                        </td>
                        <td>
                            {this.picChooser(x[3].inKey)}
                        </td>
                        <td>
                            {this.picChooser(x[4].inKey)}
                        </td>
                        <td>
                            {this.picChooser(x[5].inKey)}
                        </td>
                    </tr>
                )
            })
            console.log('newNoteData:');
            console.log(newNoteData);
            console.log('tableData')
            console.log(tableData)
            if(this.sameFinder(newNoteData)){
                console.log('they are the same!')
                this.setState({formattedData: tableData})
            }
        }
    }

    picChooser(inKey){
        if(inKey === true){
            return(<img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} />)
        } else {
            return(<img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} />)
        }
    }

    sameFinder(newData){
        let value = false;
        if(this.state.formattedData.length !== newData.length){
            value = true
        } else if (this.state.notesInKey.length === newData.length){
            for (var i = 0; i < this.state.notesInKey.length; i++){
                if (this.state.notesInKey[i] !== newData[i]){
                    value = true;
                    break;
                }
            }
        }
        console.log('value = ' + value)
        return (value)
    }

    render(){ 
        if (this.state.formattedData === "Nothing Yet"){
            return(
                // <table>
                //     <thead style = {{backgroundColor: "#222222", color: "#ffffff"}}>
                //         <tr className = "text-center">
                //             <th scope = "col">E</th>
                //             <th scope = "col">A</th>
                //             <th scope = "col">D</th>
                //             <th scope = "col">G</th>
                //             <th scope = "col">B</th>
                //             <th scope = "col">e</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //         </tr>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //         </tr>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //         </tr>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //         </tr>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //         </tr>
                //         <tr>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //             <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                //         </tr>
                //     </tbody>
                // </table>
                <tr>
                    <td>Nothing</td>
                    <td>to</td>
                    <td>display</td>
                    <td>,</td>
                    <td>yet</td>
                    <td>.</td>
                </tr>
            )
        } else if (this.state.formattedData !== "Nothing yet"){
            let finalData = this.state.formattedData
            console.log(finalData)
            return(
                <table>
                    <thead style = {{backgroundColor: "#222222", color: "#ffffff"}}>
                        <tr>
                            <th scope = "col">E</th>
                            <th scope = "col">A</th>
                            <th scope = "col">D</th>
                            <th scope = "col">G</th>
                            <th scope = "col">B</th>
                            <th scope = "col">e</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalData}
                        {/* <tr>
                            <td>no data</td><td>no data</td><td>no data</td><td>no data</td><td>no data</td><td>no data</td>
                        </tr> */}
                    </tbody>
                </table>
            )
        } else {return null} 
    }
};

export default Guitar;