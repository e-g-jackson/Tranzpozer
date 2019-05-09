export const notes = {
    Ab: ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"],
    A: ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
    Bb: ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"],
    B: ["B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"],
    C: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    Db: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"],
    D: ["D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"],
    Eb: ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D"],
    E: ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"],
    F: ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"],
    Gb: ["Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F"],
    G: ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb"]
}

export default function noteizerFxn (key){
    if (key === "Ab"){
        // console.log(notes.Ab);
        return(notes.Ab)
    } else if (key === "A"){
        // console.log(notes.A);
        return(notes.A)
    } else if (key === "Bb"){
        // console.log(notes.Bb);
        return(notes.Bb)
    } else if (key === "B"){
        // console.log(notes.B);
        return(notes.B)
    } else if (key === "C"){
        // console.log(notes.C);
        return(notes.C)
    } else if (key === "Db"){
        // console.log(notes.Db);
        return(notes.Db)
    } else if (key === "D"){
        // console.log(notes.D);
        return(notes.D)
    } else if (key === "Eb"){
        // console.log(notes.Eb);
        return(notes.Eb)
    } else if (key === "E"){
        // console.log(notes.E);
        return(notes.E)
    } else if (key === "F"){
        // console.log(notes.F);
        return(notes.F)
    } else if (key === "Gb"){
        // console.log(notes.Gb);
        return(notes.Gb)
    } else if (key === "G"){
        // console.log(notes.G);
        return(notes.G)
    }
}