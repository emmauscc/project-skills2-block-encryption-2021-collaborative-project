var binaryArray=[];
var encryptedBinaryArray=[];

for(var i=0;i<5;i++){
    var binaryArrayToPush=[Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0),Math.floor(Math.random()*(1-0+1)+0)];
    binaryArray.push(binaryArrayToPush);
}

console.log(binaryArray);

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

for(var i=0;i<binaryArray.length;i++){
    var encryptedArray = encrypt(binaryArray[i],1)
    encryptedBinaryArray.push(encryptedArray);
}

console.log(encryptedBinaryArray);

//console.log(encrypt(binaryArray,1))