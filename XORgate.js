/*
 *This function encrypts 8-digit binary using a pre selected gate with a pre generated IV.
 *@author SF
 *@param {Character} input - the 8-digit binary to be converted.
 *@param {IV} input - the 8-digit binary used to convert.
 *@param {gateType} key - key to chose gate type.
 
 *@return {gateOut} the converted 8-digit binary.

  *@example
        var a = [1,1,0,0,1,0,0,0];  // example character
        var b = [0,1,1,0,1,0,1,0];  // example IV
        var output = [];   

        var output = gate(a,b,1);
*/         

function logicGate(character,InitialV,gateType) {

    var gateOut = [];
    
    if (gateType==1) { // XOR Gate
        for (x=0; x<8; x++){
            if (character[x]==InitialV[x]) {
                gateOut.push(0);
            } else {
                gateOut.push(1);
            }
        }
    } else if (gateType==2) { // AND Gate
        for (x=0; x<8; x++){
            if (character[x] == 0 && InitialV[x] == 0) {
                gateOut.push(0);
            } else if (character[x] == 1 && InitialV[x] == 1){
                gateOut.push(0);
            } else {
                gateOut.push(1);
            }
        }
    } 
    if (gateType==3) { // OR Gate
        for (x=0; x<8; x++){
            if (character[x] == 0 && InitialV[x] == 0 || character[x] == 1 && IntialV[x] == 1) {
                gateOut.push(0);
            } else {
                gateOut.push(1);
            }
        }
    }

    console.log(gateOut);
    console.log("gitHub demo");

    return gateOut
}