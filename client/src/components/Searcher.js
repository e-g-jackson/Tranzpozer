import React from "react";
import noteizerFxn from "../assets/noteizer";
import modeizerFxn from "../assets/modeizer";
import NoteTable from "./NoteTable";

class Searcher extends React.Component {
    state = {
        mode: "",
        modeData: "no data yet...",
        notes: "",
        selectKey: "Select a Key",
        selectScale: "Select a Scale"
    }

    //gets array of notes
    noteizer(keyName){
        let notes = noteizerFxn(keyName);
        console.log(notes)
        this.setState({
            notes:notes,
            selectKey: keyName
        });
    }

    //gets array of scale degrees
    modeizer(modeName){
        let newMode = modeizerFxn(modeName);
        this.setState({
            selectScale: modeName,
            modeData: newMode
        });
    }

    render(){
        return(
            <div className = "container mt-5">
                <div className = "row" style = {{backgroundColor: "#000000", text: "#ffffff" }}>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.selectKey}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.noteizer("Ab")}}>Ab</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("A")}}>A</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("Bb")}}>Bb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("B")}}>B</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("C")}}>C</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("Db")}}>Db</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("D")}}>D</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("Eb")}}>Eb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("E")}}>E</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("F")}}>F</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("Gb")}}>Gb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("G")}}>G</div>
                        </div>
                    </div>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.selectScale}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.modeizer("Major Pentatonic")}}>Major Pentatonic</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Minor Pentatonic")}}>Minor Pentatonic</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("MajorMinor")}}>Major/Minor Pentatonic</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Ionian")}}>Ionian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Dorian")}}>Dorian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Phrygian")}}>Phrygian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Lydian")}}>Lydian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Mixolydian")}}>Mixolydian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Aeolian")}}>Aeolian</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("Locrian")}}>Locrian</div>
                        </div>
                    </div>
                </div>
                <NoteTable 
                    modeData = {this.state.modeData}
                    notes = {this.state.notes}
                />
            </div>
        )
    }
}

export default Searcher;