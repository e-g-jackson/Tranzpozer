const major = [0, 2, 4, 7, 9]
const minor = [0, 3, 5, 7, 10]

module.exports = (mode) => {
    if (mode === "major"){
        return(major);
    } else if (mode === "minor"){
        return(minor);
    }
}