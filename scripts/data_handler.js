// Declaration of crystal dictionaries 
var nickel = {
    "voltage" : [47,52,61],
    "angle" : [0,10,20,30,40,50,60,70,80,90],
    "reading" : [0,1.315,1.856,2.512,3.251,3.471,4.008,4.094,4.294,3.196,0,1.456,1.263,2.778,3.539,3.84,4.529,4.751,4.434,3.053,0,1.708,3.259,4.505,5.202,5.313,5.573,4.151,3.279,2.409],
}
var aluminium = {
    "voltage" : [71,78,92],
    "angle" : [0,10,20,30,40,50,60,70,80,90],
    "reading" : [0,1.568,2.211,3,3.811,4.135,4.775,4.877,5.116,4.008,0,1.736,2.448,3.312,4.219,4.578,5.4,5.664,5.287,4.751,0,2.044,2.882,3.899,5.391,6.358,6.669,6.225,4.967,4.151],
}
var copper = {
    "voltage" : [56,62,73],
    "angle" : [0,10,20,30,40,50,60,70,80,90],
    "reading": [0,1.988,2.804,3.739,4.135,4.832,5.243,6.184,6.486,6.054,0,2.183,3.08,4.164,5.76,6.651,6.794,7.126,6.324,5.308,0,4.914,5.15,6.794,7.845,8.013,8.405,6.26,5.391,3.632],
}

// Declaration of reading_getter function
function reading_getter(crystal,voltage,angle) {
    var temp = 0;
    if(crystal = "Nickel"){
        for(i=0;i<=2;i++){
            for(j=0;j<=9;j++){
                if(voltage == nickel["voltage"][i]){
                    if(angle == nickel["angle"][j]){
                        return nickel["reading"][temp];
                    }
                }
                temp = temp + 1;
            }
        }
    }
    temp = 0;
    if(crystal = "Aluminium"){
        for(i=0;i<=2;i++){
            for(j=0;j<=9;j++){
                if(voltage == aluminium["voltage"][i]){
                    if(angle == aluminium["angle"][j]){
                        return aluminium["reading"][temp];
                    }
                }
                temp = temp + 1;
            }
        }
    }
    temp = 0;
    if(crystal = "Copper"){
        for(i=0;i<=2;i++){
            for(j=0;j<=9;j++){
                if(voltage == copper["voltage"][i]){
                    if(angle == copper["angle"][j]){
                        return copper["reading"][temp];
                    }
                }
                temp = temp + 1;
            }
        }
    }
}

