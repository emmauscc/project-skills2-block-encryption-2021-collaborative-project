/* 
    *This function converts any text to binary text by taking each individual character in the text, including spaces, and converting them into their ascii decimal and then converting that number into binary
    *@author CE // 770508F
    *@param {string} input - text to be converted to binary
    
    *@return {array} 2 dimensional array of 8-bit arrays

    *@example
        var binaryText = convertToBinary(text);
*/
console.log("test");
function convertToBinary(textIn){

    for(var i=0; i<textIn.length; i++){
        eightBitArray=[];
        asciiDec = textIn.charCodeAt(i);
        for(var j=7;j>-1;j--){
            if(Math.pow(2, j)<=asciiDec){
                eightBitArray.push(1);
                asciiDec=asciiDec-Math.pow(2, j);
            }else if(Math.pow(2, j)>asciiDec){
                eightBitArray.push(0);
            }
        }
    

    }

    binaryText.push(eightBitArray);   
    console.log(binaryText);
    return binaryText    
}