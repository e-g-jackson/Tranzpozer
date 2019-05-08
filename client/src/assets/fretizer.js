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

export default function fretizer (noteData){
    let strings = ["E","A","D","G","B","E"];
    let stringsArray = [notes.E, notes.A, notes.D, notes.G, notes.B, notes.E];
    let template = [];

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
    console.log(template)
    return template;
};