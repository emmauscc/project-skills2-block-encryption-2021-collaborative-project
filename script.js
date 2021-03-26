//Write Code Here
$(document).ready(main);


function main(){
    var text = ReadFile("iHaveADreamPartial.txt");

    console.log(text);

    //for convertToBinary
    //var asciiDecArray = []; 
    //var eightBitArray = []; 
    //var binaryText = [];


    var InitialV = [0,1,1,0,1,0,1,0];

    var encryptedText = [];

    var a = convertToBinary(text); // a is 2D Array

    console.log(a);

    for (var i=0; i<a.length; i++){

        //convertToBinary(text);


        //var specArray = binaryText[i];

        //console.log("initialV = "+InitialV);

        var b = logicGate(a[i], InitialV, 1);

        //console.log(XORText);

        var c = encrypt(b,1); // binary, mumbo jumbo

        //console.log(XORText);

        InitialV = c;

        console.log(c);
        console.log(InitialV);

        encryptedText.push(c); 

        //console.log(encryptedText);

        gateOut = [];
        $("body").append(encryptedText[i]+"<br>");
    }

    //console.log(binaryText);
    //console.log(XORText);
    console.log(encryptedText);

    for (var i=0;i<text.lengt;i++){
        encrypt(encryptedText,-1); 

    }
    
    
/*

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

    function encrypt(binary,shift){
        for(var k=0;k<shift;k++){
    
            var i = 7;
    
            if( binary[i] == 0){ 
    
                binary[i] = 1;
        
            }else{ // binary[i] == 1
        
                if( binary[i-1] == 0){ 
        
                    binary[i-1] = 1;
        
                    binary[i] = 0;
        
                }else{ // binary[i-1] == 1
                    if( binary[i-2] == 0){
    
                        binary[i-2] = 1;
    
                        binary[i-1] = 0;
    
                        binary[i] = 0;
    
                    }else{ // binary[i-2] == 1
    
                        if ( binary [i-3] == 0){ 
    
                            binary[i-3] = 1;
    
                            binary[i-2] = 0;
    
                            binary[i-1] = 0;
    
                            binary[i] = 0
    
                        }else{ // binary[i-3] == 1
                            if( binary[i-4] == 0){
    
                                binary[i-4] = 1;
    
                                binary[i-3] = 0;
    
                                binary[i-2] = 0;
    
                                binary[i-1] = 0;
    
                                binary[i] = 0;
                            }else{ // binary[i-4] == 1
    
                                if(binary[i-5] == 0){
    
                                    binary[i-5] = 1;
    
                                    binary[i-4] = 0;
    
                                    binary[i-3] = 0;
    
                                    binary[i-2] = 0;
    
                                    binary[i-1] = 0;
    
                                    binary[i] = 0;
    
                                }else{ // binary[i-5] == 1
    
                                    if(binary[i-6] == 0){
                                        binary[i-6] = 1;
    
                                        binary[i-5] = 0;
    
                                        binary[i-4] = 0;
    
                                        binary[i-3] = 0;
    
                                        binary[i-2] = 0;
    
                                        binary[i-1] = 0;
    
                                        binary[i] = 0;
                                    }else{ // binary[i-6] == 1
    
                                        if(binary[i-7] == 0){
                                            binary[i-7] = 1;
                                            
                                            binary[i-6] = 0;
    
                                            binary[i-5] = 0;
    
                                            binary[i-4] = 0;
    
                                            binary[i-3] = 0;
    
                                            binary[i-2] = 0;
    
                                            binary[i-1] = 0;
    
                                            binary[i] = 0;
                                        }else{ // binary[i-7] == 1
                                            binary = [0,0,0,0,0,0,0,0];
                                        }
    
                                    }
    
                                }
    
                            }
                        }
    
                    }
                }
        
            }
        }
    
        return binary;

        
    
    }

*/

}