/*
//function used for memory cost
 function memoryCost(value) {
    const cost = document.getElementById('memory-cost');
    if (value == '8gb') {
        cost.innerText = '0';
    } else {
        cost.innerText = '180';
    }
    totalPrice()
}
//function used for storage cost
function storageCost(value) {
    const cost = document.getElementById('storage-cost');
    if (value == '256gb') {
        cost.innerText = '0';
    } else if (value == '512gb') {
        cost.innerText = '100';
    } else {
        cost.innerText = '180';
    }
    totalPrice();
} 

//this function used for delivey cost
function deliveryCost(value) {
    const cost = document.getElementById('delivery-cost', );
    if (value == 'aug25') {
        cost.innerText = '0';
    } else {
        cost.innerText = '20';
    }
    totalPrice();
}
*/

//this function used for update memory, storage, and delivery cost
function updateCost(id, value) {
    const cost = document.getElementById(id + '-cost');
    if (value == '8gb') {
        cost.innerText = '0';
    } else if (value == '16gb') {
        cost.innerText = '180';
    } else if (value == '256gb') {
        cost.innerText = '0';
    } else if (value == '512gb') {
        cost.innerText = '100';
    } else if (value == '1tb') {
        cost.innerText = '180';
    } else if (value == 'aug25') {
        cost.innerText = '0';
    } else if (value == 'aug21') {
        cost.innerText = '20';
    }

    totalPrice()
}


//this function used for total price
function totalPrice() {
    const cost1 = parseInt(document.getElementById('memory-cost').innerText);
    const cost2 = parseInt(document.getElementById('storage-cost').innerText);
    const cost3 = parseInt(document.getElementById('delivery-cost').innerText);
    const price = 1299 + cost1 + cost2 + cost3;
    document.getElementById('total-price').innerText = price;
    document.getElementById('price-with-commission').innerText = price;
}

//this function used for total price with commission
function applForCommission() {
    const inputValue = document.getElementById('type-for-commission');
    if (inputValue.value == 'stevekaku') {
        const totalPrice = document.getElementById('price-with-commission');
        const totalPriceInt = parseInt(totalPrice.innerText);
        totalPrice.innerText = totalPriceInt - ((totalPriceInt * 20) / 100);
        inputValue.value = '';
    } else {
        inputValue.value = '';
    }

}


document.getElementById('memory-8gb').addEventListener('click', function() {
    updateCost('memory', '8gb');
});
document.getElementById('memory-16gb').addEventListener('click', function() {
    updateCost('memory', '16gb');
});
document.getElementById('storage-256gb').addEventListener('click', function() {
    updateCost('storage', '256gb');
});
document.getElementById('storage-512gb').addEventListener('click', function() {
    updateCost('storage', '512gb');
});
document.getElementById('storage-1tb').addEventListener('click', function() {
    updateCost('storage', '1tb');
});
document.getElementById('delivery-aug25').addEventListener('click', function() {
    updateCost('delivery', 'aug25');
});
document.getElementById('delivery-aug21').addEventListener('click', function() {
    updateCost('delivery', 'aug21');
});