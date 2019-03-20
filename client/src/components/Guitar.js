import React, { Component } from "react";

class Guitar extends Component {
    state = {
        noteData: "",
        formattedData: "Nothing yet"
    }

    componentDidMount(){
        console.log('Guitar.js did Mount')
        this.renderer()
    }

    componentDidUpdate(){
        console.log('Guitar.js did Update')
        if(this.props.noteData !== this.state.noteData){
            this.renderer();
        }
        // this.renderer();
    }

    renderer(){
        if(this.state.noteData === ""){
            this.setState({noteData: this.props.noteData})
        } else if (this.state.formattedData === "Nothing Yet"){
            let newNoteData = this.state.noteData.map((x, index) => {
                return(
                    <td key = {index}>
                        {x}
                    </td>
                )
            })
            if(this.sameFinder(newNoteData)){
                console.log('if statement works!')
                this.setState({formattedData: newNoteData})
            }
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
        // if (this.state.formattedData === "Nothing Yet"){
            return(
                <table>
                    <thead>
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
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                        </tr>
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                        </tr>
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                        </tr>
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                        </tr>
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                        </tr>
                        <tr>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_empty.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                            <td><img alt = "guitar fret" src = {require("../assets/images/Guitar_note.png")} /></td>
                        </tr>
                    </tbody>
                </table>
            )
    //     } else if (this.state.formattedData !== "Nothing Yet"){
    //         return(
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th scope = "col">E</th>
    //                         <th scope = "col">A</th>
    //                         <th scope = "col">D</th>
    //                         <th scope = "col">G</th>
    //                         <th scope = "col">B</th>
    //                         <th scope = "col">e</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         {this.state.formattedData}
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         )
    //     }    
    // }
}};

export default Guitar;