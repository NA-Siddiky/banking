function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';

    return value;

}

function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);

    const previousTotal = getInnerTextValue(fieldId);

    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    // totalTag.innerText = newTotal;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagInnerText = fieldTag.innerText;
    const value = parseFloat(fieldTagInnerText);

    return value;
}

function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceTotalInText = balanceTag.innerText;
    // const balanceTotal = parseFloat(balanceTotalInText);

    const balanceTotal = getInnerTextValue("balance-total")

    let newBalance;
    if (isAdding == true) {
        newBalance = balanceTotal + amount;
    }
    else {

        newBalance = balanceTotal - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
    // balanceTag.innerText = newBalance;

    // return newBalance;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log("deposit clicked")
    const amount = getInputValue('deposit-input');
    // console.log(amount);
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log("deposit clicked")
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');

    // console.log(amount);
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});