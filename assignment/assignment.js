// https://github.com/iasraful/assinment-js

function kilometerToMeter(kilo) {
    const miter = kilo *1000;
    
    return miter;
}
// console.log(kilometerToMeter(1))

function budgetCalculator (watch, mobile, laptop) {
    var watchErDam = watch * 50;
    var mobileErDam = mobile * 100;
    var laptopErDam = laptop * 500;

    var amount = watchErDam + mobileErDam + laptopErDam;

    return amount;
}

// console.log(budgetCalculator(20 , 20 , 50));


function hotelCost(night) {    
    let cost =0; 
    if (night<=10) {
        cost = night *100;
    }
    else if (night<=20) {
        firstPart = 10 * 100;
        remaining = night - 10;
        secondPart = night * 80;
        cost = firstPart + secondPart;
    }
    else{
        firstPart = 10 * 100 ;
        secondPart = night * 80 ;
        remaining = night - 20 ;
        thirdPart = night * 50;
        cost = firstPart + secondPart + thirdPart;

    }
    return cost;

}
// console.log(hotelCost(30));



let friends = [ 'Asraful Islam', 'Jamal Uddin', 'Jhankar Mahabub Bhai', 'Moya Akter joya', 'tiya', 'pavel' ];

function megaFriend(friendArray) {

    var maxLenth = friendArray[0];
    
    for (var i = 0; i < friendArray.length; i++) {
        let friends = friendArray[i];

        if (friends.length > maxLenth.length) {

            maxLenth = friends;
            
        }

    }

    return maxLenth;
    
}

    
// var count = megaFriend(friends);
// console.log(count);