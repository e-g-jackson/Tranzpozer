import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar navbar-expand-lg navbar-dark bg-dark">
                <a href = "/">
                    <button className = "btn btn-sm btn-warning mr-3">Home</button>
                </a>
                <a href = "/guitar">
                    <button className = "btn btn-sm btn-success mr-3">Guitar</button>
                </a>
            </div>
        )
    }
};

export default Navbar;