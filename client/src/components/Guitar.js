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
        tuning: [
            this.E_String || "E", 
            this.A_String || "A", 
            this.D_String || "D", 
            this.G_String || "G", 
            this.B_String || "B", 
            this.e_String || "E"
        ]
    }
    componentDidMount(){
        console.log('Guitar.js did Mount');
        // console.log('TUNING:');
        // console.log(this.state.tuning);
        // console.log(this.state);
        this.renderer();
    }

    componentDidUpdate(){
        console.log('Guitar.js did Update');
        console.log('STRING STATE VS TUNING:');
        console.log(this.state.E_String + ' vs ' + this.state.tuning[0]);
        console.log(this.state.A_String + ' vs ' + this.state.tuning[1]);
        console.log(this.state.D_String + ' vs ' + this.state.tuning[2]);
        console.log(this.state.G_String + ' vs ' + this.state.tuning[3]);
        console.log(this.state.B_String + ' vs ' + this.state.tuning[4]);
        console.log(this.state.e_String + ' vs ' + this.state.tuning[5]);
        // console.log(this.state.tuning)
        this.renderer();
        //if statements prevent repeat fires
        // if(this.props.noteData !== this.state.noteData){
        //     console.log('this.props.noteData !== this.state.noteData')
        //     this.renderer();
        // } 
        // else if (this.state.E_String !== this.state.tuning[0]){
        //     this.renderer();
        // } else if (this.state.A_String !== this.state.tuning[1]){
        //     this.renderer();
        // } else if (this.state.D_String !== this.state.tuning[2]){
        //     this.renderer();
        // } else if (this.state.G_String !== this.state.tuning[3]){
        //     this.renderer();
        // } else if (this.state.B_String !== this.state.tuning[4]){
        //     this.renderer();
        // } else if (this.state.e_String !== this.state.tuning[5]){
        //     this.renderer();
        // }

        // if(this.state.E_String !== this.state.tuning[0] || this.state.A_String !== this.state.tuning[1]
        //     || this.state.D_String !== this.state.tuning[2] || this.state.G_String !== this.state.tuning[3]
        //     || this.state.B_String !== this.state.tuning[4] || this.state.e_String !== this.state.tuning[5]){
        //     console.log('this.SOME_String !== this.state.tuning[SOME#]')
        //     this.renderer();
        // }
    }

    sounds(e){
        var playNote = e.target.getAttribute("note");
        console.log(playNote);
        // var audio = new Audio('audio_file.mp3');
        // audio.play();
    }

    renderer(){
        //pass key, scale, tuning...
        // console.log('fretizer:')
        // console.log(fretizer(this.props.noteData, this.state.E_String, this.state.A_String, this.state.D_String, this.state.G_String, this.state.B_String, this.state.e_String));
        console.log('renderer running...')
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
        console.log('Samefinder running!')
        // console.log(newData)
        let value = false;
        if(this.state.formattedData.length !== newData.length){
            value = true
        } else if (this.state.formattedData.length === newData.length){
            console.log('ELSE IF statement')
            //only checking one string?
            for (var i = 0; i < this.state.formattedData.length; i++){
                var oldStuff = this.state.formattedData[i]
                var newStuff = newData[i]
                for (var j = 0; j < 6; j++){
                    var oldEachString = oldStuff.props.children[j].props.children.props.children[0].props.inkey;
                    var newEachString = newStuff.props.children[j].props.children.props.children[0].props.inkey;
                    if(oldEachString !== newEachString){
                        value = true;
                        break;
                    }
                }
            }
        }
        console.log('Value = ' + value)
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
                                                    E_String:"A",
                                                    tuning: [
                                                        "A", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Bb",
                                                    tuning: [
                                                        "Bb", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"B",
                                                    tuning: [
                                                        "B", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"C",
                                                    tuning: [
                                                        "C", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Db",
                                                    tuning: [
                                                        "Db", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"D",
                                                    tuning: [
                                                        "D", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Eb",
                                                    tuning: [
                                                        "Eb", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"E",
                                                    tuning: [
                                                        "E", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"F",
                                                    tuning: [
                                                        "F", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Gb",
                                                    tuning: [
                                                        "Gb", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"G",
                                                    tuning: [
                                                        "G", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    E_String:"Ab",
                                                    tuning: [
                                                        "Ab", 
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
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
                                                    A_String:"A",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "A",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Bb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "Bb",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"B",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "B",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"C",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "C",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Db",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "Db",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"D",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "D",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Eb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "Eb",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"E",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "E",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"F",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "F",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Gb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "Gb",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"G",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "G",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    A_String:"Ab",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        "Ab",
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
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
                                                    D_String:"A",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "A",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Bb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "Bb",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"B",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "B",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"C",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "C",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Db",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "Db",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"D",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "D",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Eb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "Eb",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"E",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "E",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"F",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "F",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Gb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "Gb",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"G",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "G",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    D_String:"Ab",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        "Ab",
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
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
                                                    G_String:"A",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "A",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Bb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "Bb",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"B",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "B",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"C",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "C",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Db",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "Db",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"D",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "D",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Eb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "Eb",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"E",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "E",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"F",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "F",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Gb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "Gb",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"G",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "G",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    G_String:"Ab",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        "Ab",
                                                        this.state.B_String,
                                                        this.state.e_String,
                                                    ]
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
                                                    B_String:"A",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "A",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Bb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "Bb",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"B",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "B",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"C",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "C",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Db",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "Db",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"D",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "D",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Eb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "Eb",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"E",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "E",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"F",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "F",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Gb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "Gb",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"G",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "G",
                                                        this.state.e_String,
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    B_String:"Ab",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        "Ab",
                                                        this.state.e_String,
                                                    ]
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
                                                    e_String:"A",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "A",
                                                    ]
                                                })
                                            }}>A</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Bb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "Bb",
                                                    ]
                                                })
                                            }}>Bb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"B",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "B",
                                                    ]
                                                })
                                            }}>B</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"C",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "C",
                                                    ]
                                                })
                                            }}>C</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Db",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "Db",
                                                    ]
                                                })
                                            }}>Db</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"D",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "D",
                                                    ]
                                                })
                                            }}>D</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Eb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "Eb",
                                                    ]
                                                })
                                            }}>Eb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"E",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "E",
                                                    ]
                                                })
                                            }}>E</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"F",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "F",
                                                    ]
                                                })
                                            }}>F</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Gb",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "Gb",
                                                    ]
                                                })
                                            }}>Gb</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"G",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "G",
                                                    ]
                                                })
                                            }}>G</div>
                                    <div 
                                        className = "dropdown-item"
                                        onClick = {
                                            () => {
                                                this.setState({
                                                    e_String:"Ab",
                                                    tuning: [ 
                                                        this.state.E_String,
                                                        this.state.A_String,
                                                        this.state.D_String,
                                                        this.state.G_String,
                                                        this.state.B_String,
                                                        "Ab",
                                                    ]
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