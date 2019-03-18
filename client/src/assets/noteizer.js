const Ab = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
const A = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
const Bb = ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"];
const B = ["B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"];
const C = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const Db = ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];
const D = ["D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"];
const Eb = ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D"];
const E = ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"];
const F = ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"];
const Gb = ["Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F"];
const G = ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb"];

export default function noteizerFxn (key){
    if (key === "Ab"){
        console.log(Ab);
        return(Ab)
    } else if (key === "A"){
        console.log(A);
        return(A)
    } else if (key === "Bb"){
        console.log(Bb);
        return(Bb)
    } else if (key === "B"){
        console.log(B);
        return(B)
    } else if (key === "C"){
        console.log(C);
        return(C)
    } else if (key === "Db"){
        console.log(Db);
        return(Db)
    } else if (key === "D"){
        console.log(D);
        return(D)
    } else if (key === "Eb"){
        console.log(Eb);
        return(Eb)
    } else if (key === "E"){
        console.log(E);
        return(E)
    } else if (key === "F"){
        console.log(F);
        return(F)
    } else if (key === "Gb"){
        console.log(Gb);
        return(Gb)
    } else if (key === "G"){
        console.log(G);
        return(G)
    }
}