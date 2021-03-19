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