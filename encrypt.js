function encrypt(input, key, type){
    
    var output="";
    
    if(type == "caesar"){

        var inputDecimalShifted = parseInt(input,2)+key;

        if(inputDecimalShifted >255){

            inputDecimalShifted = inputDecimalShifted - 255;
            
        }
        output=inputDecimalShifted.toString(2);

        var loopTimes = 8-output.length;

        for(var i=0;i<loopTimes;i++){

            output = "0"+output;
        }
        if(output.length!=8){

            console.log("ERROR!!!!");
        }
            
    }
    return output
}