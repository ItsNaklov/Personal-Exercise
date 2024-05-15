// DATA
const clothes = [];
const temperature [hot];
function (temp){
    // LOGIC
    for (
        i = 0; // başlangıç değeri
        i < clothes.length; // döngünün kırılması veya sonsuza gitmemesi için gerekli olan kural. 2. kaç kere döneceğini belirleme
        i++ // her kontrolden sonra bu yapılacak ki döngü bir yerde dursun 
    ){// süslü paranterzlerin içi bu işlemde ne yapacak yada neyi kontrol edecek
        if (temperature < clothes[i]){
            return clothes[i];
        }
    }
    return clothes[clothes.length - 1];
}

const clothesToWear = getClothesToWear{30, clothe, temperatures}
//RENDER
console.log clothesToWear //TODO i will do something about it later
