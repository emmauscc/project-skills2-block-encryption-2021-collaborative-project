var input = [1,1,0,0,1,0,0,1];

function convertBinary(inputArray) {
    for(var i=0; i<inputArray.length;i++){
        var sum=0;
        if (inputArray[0]==0){
    
        }else{
            sum=sum+Math.pow(2,7);
        }
    
        if( inputArray[1] == 0){
            
        }else{
            sum=sum+Math.pow(2,6);
        }
    
        if (inputArray[2]==0){

        }else{
            sum=sum+Math.pow(2,5)
        }

        if (inputArray[3]==0){

        }else{
            sum=sum+Math.pow(2,4)
        }

        if (inputArray[4]==0){

        }else{
            sum=sum+Math.pow(2,3)
        }

        if (inputArray[5]==0){

        }else{
            sum=sum+Math.pow(2,2)
        }

        if (inputArray[6]==0){

        }else{
            sum=sum+Math.pow(2,1)
        }

        if (inputArray[7]==0){

        }else{
            sum=sum+Math.pow(2,0)
        }
    return String.fromCharCode(sum);
    }
    
}
console.log(convertBinary(input));