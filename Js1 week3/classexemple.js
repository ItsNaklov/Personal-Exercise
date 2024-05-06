// DATA
const clothes [];
const temperature[hot];
function (){
    // LOGIC
    for (i = 0; i < temperature.length; i++){
        if (temperature < temperatures[i]){
            return clothes[i];

        }
    }
    return clothes[clothes.length - 1];

}

const clothesToWear = getClothesToWear{30, clothe, temperatures}
//RENDER
console.log clothesToWear