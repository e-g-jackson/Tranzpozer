const majorPentatonic = [0, 2, 4, 7, 9]
const minorPentatonic = [0, 3, 5, 7, 10]
const ionian = [0, 2, 4, 5, 7, 9 , 11];
const dorian = [0, 2, 3, 5, 7, 9, 10];
const phrygian = [0, 1, 3, 5, 7, 8, 10];
const lydian = [0, 2, 4, 6, 7, 9, 11];
const mixolydian = [0, 2, 4, 5, 7, 9, 10];
const aeolian = [0, 2, 3, 5, 7, 8, 10];
const locrian = [0, 1, 3, 5, 6, 8, 10];

module.exports = function modeizer (mode){
    if (mode === "Major Pentatonic"){
        console.log(majorPentatonic)
        return(majorPentatonic);
    } else if (mode === "Minor Pentatonic"){
        console.log(minorPentatonic)
        return(minorPentatonic);
    } else if (mode === "Ionian"){
        console.log(ionian)
        return(ionian);
    } else if (mode === "Dorian"){
        console.log(dorian)
        return(dorian);
    } else if (mode === "Phrygian"){
        console.log(phrygian)
        return(phrygian);
    } else if (mode === "Lydian"){
        console.log(lydian)
        return(lydian);
    } else if (mode === "Mixolydian"){
        console.log(mixolydian)
        return(mixolydian);
    } else if (mode === "Aeolian"){
        console.log(aeolian)
        return(aeolian);
    } else if (mode === "Locrian"){
        console.log(locrian)
        return(locrian);
    }
}