export default function compromizer(notes, scale){
    let newScale = []
    for(var i = 0; i < scale.length; i++){
        const number = scale[i];
        newScale.push(notes[number])
    }
    return newScale;
}