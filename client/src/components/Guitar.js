import React, { Component } from "react";
import fretizer from "../assets/fretizer";

class Guitar extends Component {
    state = {
        noteData: "",
        formattedData: "Nothing yet",
        E_String: "E",
        A_String: "A",
        D_String: "D",
        G_String: "G",
        B_String: "B",
        e_String: "E",
        tuning: [this.E_String, this.A_String, this.D_String, this.G_String, this.B_String, this.e_String]
    }

    componentDidMount(){
        console.log('Guitar.js did Mount');
        this.renderer();
    }

    componentDidUpdate(){
        console.log('Guitar.js did Update')
        // console.log(this.state.tuning)

        //if statements prevent repeat fires
        if(this.props.noteData !== this.state.noteData){
            // console.log('this.props.noteData !== this.state.noteData')
            this.renderer();
        }
        if(this.state.E_String !== this.state.tuning[0] || this.state.A_String !== this.state.tuning[1]
            || this.state.D_String !== this.state.tuning[2] || this.state.G_String !== this.state.tuning[3]
            || this.state.B_String !== this.state.tuning[4] || this.state.e_String !== this.state.tuning[5]){
            // console.log('this.SOME_String !== this.state.tuning[SOME#]')
            this.renderer();
        }
    }

    sounds(e){
        var playNote = e.target.getAttribute("note");
        // console.log(playNote);
        // var audio = new Audio('audio_file.mp3');
        // audio.play();
    }

    renderer(){
        //pass key, scale, tuning...
        // console.log('fretizer:')
        // console.log(fretizer(this.props.noteData, this.state.E_String, this.state.A_String, this.state.D_String, this.state.G_String, this.state.B_String, this.state.e_String));

        let newNoteData = fretizer(this.props.noteData, this.state.E_String, this.state.A_String, this.state.D_String, this.state.G_String, this.state.B_String, this.state.e_String);
        let tableData = newNoteData.map((x, index) => {
            function stylePicker (inKey, nutNote) {
                if(!nutNote){
                    return (centeredText)
                }
                else{
                    if(inKey){
                        return(centeredTextNut)
                    } else {
                        return(centeredTextNutEmpty)
                    }
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
                color: "#ffffff", 
                fontSize: "12px",
                height: "0px",
                transform: "translate(-50%, -50%)",
                zIndex:"5"
            };
            const centeredTextNutEmpty = {
                position: "relative",
                display: "flex",
                top: "-25px",
                left: "70px",
                color: "#000000", 
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
                                style = {stylePicker(x[0].inKey, x[0].nutNote)} 
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
                                style = {stylePicker(x[1].inKey, x[1].nutNote)} 
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
                                style = {stylePicker(x[2].inKey, x[2].nutNote)} 
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
                                style = {stylePicker(x[3].inKey, x[3].nutNote)} 
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
                                style = {stylePicker(x[4].inKey, x[4].nutNote)} 
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
                                style = {stylePicker(x[5].inKey, x[5].nutNote)} 
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
                var oldStuff = this.state.formattedData[i].props.children[0].props.children.props.children[0].props.inkey;
                var newStuff = newData[i].props.children[0].props.children.props.children[0].props.inkey; 
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
            // console.log(finalData)
            return(
                <table>
                    <thead style = {{backgroundColor: "#222222", color: "#ffffff"}}>
                        <tr>
                            <th scope = "col">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_E" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.E_String}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_E">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
                            <th scope = "col"><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_A" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.A_String}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_A">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
                            <th scope = "col">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_D" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.D_String}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_D">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
                            <th scope = "col">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_G" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.G_String}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_G">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
                            <th scope = "col">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_B" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.B_String}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_B">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
                            <th scope = "col">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton_e" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{width: "100%",}}>
                                    {this.state.e_String.toLowerCase()}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_e">
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"A"
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Bb"
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"B"
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"C"
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Db"
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"D"
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Eb"
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"E"
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"F"
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Gb"
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"G"
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Ab"
                                                })
                                            }}>Ab</div>
                                </div>
                            </th>
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