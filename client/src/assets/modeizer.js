const major = [0, 2, 4, 7, 9]
const minor = [0, 3, 5, 7, 11]

module.exports = function modeizer (mode){
    if (mode === "Major"){
        console.log(major)
        return(major);
    } else if (mode === "Minor"){
        console.log(minor)
        return(minor);
    }
}