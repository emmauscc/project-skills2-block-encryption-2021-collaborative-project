// IV needs to be set within a loop, initally from the first binary word. Then from then on the output of Grady's function.

var character = [1,1,0,1,1,0,0,0];
var IV = [0,1,1,0,1,0,1,0]; //input needs to be an array as such.
var output = [];

//XORgate(character,IV);

function XORgate(a,b){
    for (x=0; x<8; x++){
        if (a[x]==b[x]) {
            output.push(0);
        } else {
            output.push(1);
        }
    }

    console.log(output);
    return output
}