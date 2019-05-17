import React from "react";
import { Link } from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to = "/">
                    <button className = "btn btn-sm btn-outline-danger px-5 mr-3">Home</button>
                </Link>
                <Link to = "/guitar">
                    <button className = "btn btn-sm btn-outline-danger px-5 mr-3">Noteizer</button>
                </Link>
            </div>
        )
    }
};

export default Navbar;