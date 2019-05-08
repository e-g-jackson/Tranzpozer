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

    sounds(e){
        var playNote = e.target.getAttribute("note");
        console.log(playNote);
        // var audio = new Audio('audio_file.mp3');
        // audio.play();
    }

    renderer(){
        //pass key, scale, tuning...
        console.log('fretizer:')
        console.log(fretizer(this.props.noteData));

        let newNoteData = fretizer(this.props.noteData);
        let tableData = newNoteData.map((x, index) => {
            function stylePicker (nutNote) {
                if(!nutNote){
                    return (centeredText)
                }
                else{
                    return(centeredTextNut)
                }
            }
            const centeredText = {
                position: "relative",
                display: "flex",
                top: "-60px",
                left: "70px",
                color: "#ffffff", 
                fontSize: "12px",
                height: "0px",
                transform: "translate(-50%, -50%)",
                zIndex:"5"
            };
            const centeredTextNut = {
                position: "relative",
                display: "flex",
                top: "-25px",
                left: "70px",
                color: "transparent", 
                fontSize: "12px",
                height: "0px",
                transform: "translate(-50%, -50%)",
                zIndex:"5"
            };
            return(
                <tr key = {index}>
                    <td>
                        <div className = "">
                            {this.picChooser(x[0].inKey, x[0].nutNote)}
                            <div 
                                style = {stylePicker(x[0].nutNote)} 
                                note = {x[0].note}
                                title = {x[0].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[0].note}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[1].inKey, x[1].nutNote)}
                            <div 
                                style = {stylePicker(x[1].nutNote)} 
                                note = {x[1].note}
                                title = {x[1].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[1].note}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[2].inKey, x[2].nutNote)}
                            <div 
                                style = {stylePicker(x[2].nutNote)} 
                                note = {x[2].note}
                                title = {x[2].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[2].note}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[3].inKey, x[3].nutNote)}
                            <div 
                                style = {stylePicker(x[3].nutNote)} 
                                note = {x[3].note}
                                title = {x[3].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[3].note}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[4].inKey, x[4].nutNote)}
                            <div 
                                style = {stylePicker(x[4].nutNote)} 
                                note = {x[4].note}
                                title = {x[4].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[4].note}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className = "">
                            {this.picChooser(x[5].inKey, x[5].nutNote)}
                            <div 
                                style = {stylePicker(x[5].nutNote)} 
                                note = {x[5].note}
                                title = {x[5].note} 
                                onMouseOver = {(event) => {this.sounds(event)}}
                                >{x[5].note}
                            </div>
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

    picChooser(inKey, nutNote){
        if(inKey && nutNote){
            return(<img alt = "guitar fret" inkey = "true" src = {require("../assets/images/Nut_note.png")} />)
        } else if (!inKey && nutNote){
            return(<img alt = "guitar fret" inkey = "true" src = {require("../assets/images/Nut_empty.png")} />)
        } else if(inKey && !nutNote){
            return(<img alt = "guitar fret" inkey = "true" src = {require("../assets/images/Guitar_note.png")} />)
        } else if (!inKey && !nutNote) {
            return(<img alt = "guitar fret" inkey = "false" src = {require("../assets/images/Guitar_empty.png")} />)
        }
    }

    sameFinder(newData){
        let value = false;
        if(this.state.formattedData.length !== newData.length){
            value = true
        } else if (this.state.formattedData.length === newData.length){
            for (var i = 0; i < this.state.formattedData.length; i++){
                console.log('/////////////////////////////////')
                console.log(this.state.formattedData[i].props)
                console.log('/////////////////////////////////')
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