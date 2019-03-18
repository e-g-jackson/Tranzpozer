const major = [0, 2, 4, 7, 9]
const minor = [0, 3, 5, 7, 11]

function modeizer (mode){
    if (mode === "Major"){
        return(major);
    } else if (mode === "Minor"){
        return(minor);
    }
}

export default modeizer;