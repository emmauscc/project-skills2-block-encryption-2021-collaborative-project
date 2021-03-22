/*
 *@author GC
 *@param {array} input - the 8-digit binary to be shifted
 *@param {number} key - the number of places to shift 8-digit binary
 
 *@return {array} the shifted 8-digit binary

  *@example
        var encryptedBinaryArray = encrypt(binaryArray,4);
*/

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