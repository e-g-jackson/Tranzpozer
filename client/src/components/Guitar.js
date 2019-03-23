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

        let newNoteData = fretizer(this.props.noteData);
        let tableData = newNoteData.map((x, index) => {
            const centeredText = {
                position: "relative",
                display: "flex",
                top: "-50px",
                left: "70px",
                color: "#ffffff", 
                fontSize: "15px",
                // backgroundColor: "#333333",
                transform: "translate(-50%, -50%)",
                zIndex:"5"
            };
            return(
                <tr key = {index}>
                    <td>
                        <div className = "">
                            {this.picChooser(x[0].inKey)}
                            <div style = {centeredText}>{x[0].note}</div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[1].inKey)}
                            <div style = {centeredText}>{x[1].note}</div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[2].inKey)}
                            <div style = {centeredText}>{x[2].note}</div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[3].inKey)}
                            <div style = {centeredText}>{x[3].note}</div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[4].inKey)}
                            <div style = {centeredText}>{x[4].note}</div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[5].inKey)}
                            <div style = {centeredText}>{x[5].note}</div>
                        </div>
                    </td>
                </tr>
            )
        })

        if(this.state.noteData === ""){
            this.setState({noteData: this.props.noteData})
        }
        if (this.state.formattedData === "Nothing yet" || this.state.formattedData !== tableData){
            
            // console.log('newNoteData:');
            // console.log(newNoteData);
            // console.log('tableData')
            // console.log(tableData)

            if(this.sameFinder(tableData)){
                console.log('they are the same!')
                this.setState({formattedData: tableData})
            }
        }
    }

    picChooser(inKey){
        if(inKey === true){
            return(<img alt = "guitar fret" inkey = "true" src = {require("../assets/images/Guitar_note.png")} />)
        } else {
            return(<img alt = "guitar fret" inkey = "false" src = {require("../assets/images/Guitar_empty.png")} />)
        }
    }

    sameFinder(newData){
        let value = false;
        if(this.state.formattedData.length !== newData.length){
            value = true
        } else if (this.state.formattedData.length === newData.length){
            for (var i = 0; i < this.state.formattedData.length; i++){
                var oldStuff = this.state.formattedData[i].props.children[0].props.children.props.children[0].props.inkey;
                var newStuff = newData[i].props.children[0].props.children.props.children[0].props.inkey;        
                // console.log(this.state.formattedData[i].props.children[0].props.children.props.children[0].props.inkey)
                // console.log(newData[i].props.children[0].props.children.props.children[0].props.inkey)
                if (oldStuff !== newStuff){
                    value = true;
                    break;
                }
            }
        }
        return (value)
    }

    render(){ 
        if (this.state.formattedData === "Nothing Yet"){
            return(
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