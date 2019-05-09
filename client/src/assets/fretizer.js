import { notes } from "./noteizer";
// let key = "C";
// let scale = "Ionian"
//will accept key, scale arguments

function compare(sf, nd){
    let answer = false;
    for(var i = 0; i < nd.length; i++){
        if(sf === nd[i]){
            answer = true;
        }
    }
    return answer
}

function noteGetter (input) {
    if (input === "A"){
        return(notes.A)
    } else if (input === "Bb"){
        return(notes.Bb)
    } else if (input === "B"){
        return(notes.B)
    } else if (input === "C"){
        return(notes.C)
    } else if (input === "Db"){
        return(notes.Db)
    } else if (input === "D"){
        return(notes.D)
    } else if (input === "Eb"){
        return(notes.Eb)
    } else if (input === "E"){
        return(notes.E)
    } else if (input === "F"){
        return(notes.F)
    } else if (input === "Gb"){
        return(notes.Gb)
    } else if (input === "G"){
        return(notes.G)
    } else if (input === "Ab"){
        return(notes.Ab)
    }
}

export default function fretizer (noteData, E, A, D, G, B, e){
    let strings = [E, A, D, G, B, e] || ["E", "A", "D", "G", "B", "E"];
    let stringsArray = [noteGetter(E), noteGetter(A), noteGetter(D), noteGetter(G), noteGetter(B), noteGetter(e)];
    let template = [];
    // console.log('STRINGS:');
    // console.log(strings);
    // console.log('stringsArray:');
    // console.log(stringsArray);
    //f = number of frets
    for(var f = 0; f < 12; f++){
        var row = [];

        //s = number of strings
        for(var s = 0; s < strings.length; s++){
            if(f === 0){
                if(compare(stringsArray[s][f], noteData)){
                row.push({
                    note:stringsArray[s][f],
                    inKey: true,
                    nutNote: true,
                });
            } else {
                row.push({
                    note:stringsArray[s][f], 
                    inKey: false,
                    nutNote: true,
                })
            }

            } else {
                if(compare(stringsArray[s][f], noteData)){
                    row.push({
                        note:stringsArray[s][f],
                        inKey: true,
                        nutNote:false,
                    });
                } else {
                    row.push({
                        note:stringsArray[s][f], 
                        inKey: false,
                        nutNote: false,
                    })
                }
            }
        }
        template.push(row)
    };
    // console.log(template)
    return template;
};