import React from "react";
import axios from "axios";

class Guitar extends React.Component {
    state = {
        data: "no data yet..."
    }

    //gets array of notes
    noteizer(key){
        axios.get(key).then((result) => {
            console.log(result.data)
            let newKey = result.data.map((x) => {
                return(
                    <div key = {Math.floor(Math.random() * 99999999999999999)}>
                        <h3 className = "p-2" style = {{backgroundColor:"#333333"}}>{x}</h3>
                    </div>
                )
            })
            this.setState({data: newKey})
        }).catch((err) => {throw err})
    }

    //formats array
    modeizer(mode){
        axios.get(mode).then((response) => {
            console.log(response.data)
        }).catch((error) => {throw error})
    }

    render(){
        return(
            <div className = "container">
                <h1>Guitar:</h1>
                <div className = "row" style = {{backgroundColor: "#000000", text: "#ffffff" }}>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select a Key
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Ab")}}>Ab</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/A")}}>A</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Bb")}}>Bb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/B")}}>B</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/C")}}>C</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Db")}}>Db</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/D")}}>D</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Eb")}}>Eb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/E")}}>E</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/F")}}>F</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/Gb")}}>Gb</div>
                            <div className="dropdown-item" onClick={() => {this.noteizer("/noteizer/G")}}>G</div>
                        </div>
                    </div>
                    <div className="dropdown m-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select a Scale
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => {this.modeizer("/modeizer/major")}}>Major</div>
                            <div className="dropdown-item" onClick={() => {this.modeizer("/modeizer/minor")}}>Minor</div>
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