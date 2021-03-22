// IV needs to be set within a loop, initally from the first binary word. Then from then on the output of Grady's function.

var a = [1,1,0,1,1,0,0,0];
var b = [0,1,1,0,1,0,1,0]; //input needs to be an array as such.
var output = [];

//XORgate(character,IV);

function XORgate(character,IV,gateType) {
    if (gateType==1) {
        for (x=0; x<8; x++){
            if (character[x]==IV[x]) {
                output.push(0);
            } else {
                output.push(1);
            }
        }
    } else if (gateType==2) {

    } else if (gateType==3) {

    }

    console.log(output);
    console.log("gitHub demo");

    return output
}