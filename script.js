//Write Code Here
$(document).ready(main);


function main(){
    var text = ReadFile("iHaveADreamPartial.txt");

    console.log(text);

    var binaryText = [];

    var asciiDecArray = []; 
    var eightBitArray = []; 
    //var acsiDec; 

    for (var i=0; i<text.length; i++){

        convertToBinary(text);

        console.log(binaryText);
        

        //sam conversion
        
        //grady conversion

    }
    
    function convertToBinary(textIn){
        eightBitArray=[];
                asciiDec = textIn.charCodeAt(i);
                asciiDecArray.push(textIn.charCodeAt(i))
                console.log(asciiDecArray);
                for(var j=7;j>-1;j--){
                    if(Math.pow(2, j)<=asciiDec){
                        eightBitArray.push(1);
                        asciiDec=asciiDec-Math.pow(2, j);
                    }else if(Math.pow(2, j)>asciiDec){
                        eightBitArray.push(0);
                    }
                }
                binaryText.push(eightBitArray);
        
        console.log(binaryText);
        return binaryText
    }

}