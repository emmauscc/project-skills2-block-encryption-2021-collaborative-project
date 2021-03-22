//Write Code Here
$(document).ready(main);


function main(){
    var text = ReadFile("iHaveADreamPartial.txt");

    console.log(text);

    //for convertToBinary
    var asciiDecArray = []; 
    var eightBitArray = []; 
    var binaryText = [];

    var XORText = [];

    var InitialV = [0,1,1,0,1,0,1,0];

    
    
    //var acsiDec; 

    for (var i=0; i<text.length; i++){

        convertToBinary(text);

        var specArray = binaryText[i];

        console.log("initialV = "+InitialV);

        XORgate(specArray, InitialV, 1);

        console.log(XORText);

        //Grady output would equal variable InitialV;



        //IV would need to be set through encrypt.js and changed everytime loop happens
        
        //grady conversion

    }

    console.log(binaryText);
    console.log(XORText);
    
    function convertToBinary(textIn){
        eightBitArray=[];
                asciiDec = textIn.charCodeAt(i);
                asciiDecArray.push(textIn.charCodeAt(i))
                //console.log(asciiDecArray);
                for(var j=7;j>-1;j--){
                    if(Math.pow(2, j)<=asciiDec){
                        eightBitArray.push(1);
                        asciiDec=asciiDec-Math.pow(2, j);
                    }else if(Math.pow(2, j)>asciiDec){
                        eightBitArray.push(0);
                    }
                }
                binaryText.push(eightBitArray);
        
        //console.log(binaryText);
        return binaryText
    }

    
    function XORgate(character,IV,gateType) {
        XORText = [];
        if (gateType==1) {
            for (x=0; x<8; x++){
                if (character[x]==IV[x]) {
                    XORText.push(0);
                } else {
                    XORText.push(1);
                }
            }
        } else if (gateType==2) {

        } else if (gateType==3) {

        }

        //console.log(XORGate);
        console.log("gitHub demo");

        return XORText
    }

    

}