import React from "react";

class Guitar extends React.Component {
    render(){
        return(
            <div className = "container">
                <h1>Guitar:</h1>
                <div className = "row" style = {{backgroundColor: "#000000", text: "#ffffff" }}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Homepage</a>
                            <a class="dropdown-item" href="/">Maybe Go Home</a>
                            <a class="dropdown-item" href="/">Really, go home!</a>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Guitar;