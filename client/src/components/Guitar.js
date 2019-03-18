import React from "react";
// import axios from "axios";
import noteizerFxn from "../assets/noteizer";
import modeizerFxn from "../assets/modeizer";

class Guitar extends React.Component {
    state = {
        data: "no data yet...",
        mode: "",
        selectKey: "Select a Key",
        selectScale: "Select a Scale"
    }

    //gets array of notes
    noteizer(key, keyName){
        let notes = noteizerFxn(keyName);
        console.log(notes)
        let newKey = notes.map((x, index) => {
            return(
                <div key = {index}>
                    <h3 className = "p-2" style = {{backgroundColor:"#333333"}}>{x}</h3>
                </div>
            )
        })
        this.setState({
            data: newKey,
            selectKey: keyName
        })
    }

    //gets array of scale degrees
    modeizer(mode, modeName){
        console.log(modeName + " selected!")
        console.log(modeizerFxn)
        let newMode = modeizerFxn(modeName)
        console.log(newMode);
        this.setState({selectScale: modeName})
    }

    render(){
        return(
            <div className = "container">
                <h1>Guitar:</h1>
                <div className = "row" style = {{backgroundColor: "#000000", text: "#ffffff" }}>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.selectKey}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Ab", "Ab")}}>Ab</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/A", "A")}}>A</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Bb", "Bb")}}>Bb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/B", "B")}}>B</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/C", "C")}}>C</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Db", "Db")}}>Db</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/D", "D")}}>D</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Eb", "Eb")}}>Eb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/E", "E")}}>E</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/F", "F")}}>F</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Gb", "Gb")}}>Gb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/G", "G")}}>G</div>
                        </div>
                    </div>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.selectScale}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.modeizer("/modeizer/major", "Major")}}>Major</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("/modeizer/minor", "Minor")}}>Minor</div>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div id = "body" className = "p-2" style = {{ backgroundColor: "#333333", color:"white"}}>
                        {this.state.data}
                    </div>
                </div> 
            </div>
        )
    }
}

export default Guitar;