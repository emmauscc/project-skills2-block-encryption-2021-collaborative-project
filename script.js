//Write Code Here
$(document).ready(main);


function main(){
    var text = ReadFile("iHaveADreamPartial.txt");

    console.log(text);

    var InitialV = [0,1,1,0,1,0,1,0];

    var encryptedText = [];

    var binaryResult = convertToBinary(text); // a is 2D Array

    console.log(binaryResult);

    for (var i=0; i<binaryResult.length; i++){

        var gateResult = logicGate(binaryResult[i], InitialV, 1); //variable defines array after XOR gate is applied

        var encryptResult = encrypt(gateResult,1); //variable defines full encrypted array

        InitialV = encryptResult; //using encrypted array for Initial Variable for XOR gate

        console.log(encryptResult);
        console.log(InitialV);

        encryptedText.push(encryptResult); 

        gateOut = [];
        $("body").append(encryptedText[i]+"<br>");
    }

    console.log(encryptedText);

    for (var i=0;i<text.lengt;i++){
        encrypt(encryptedText,-1); 

    }
    

}