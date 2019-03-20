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
            this.setState({formattedData: newNoteData})
        }
    }

    render(){
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
                        {this.state.formattedData}
                    </tr>
                </tbody>
            </table>
        )
    }
};

export default Guitar;