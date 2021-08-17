// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);

    const InputAmountText = InputField.value;
    const amountValue = parseFloat(InputAmountText);

    InputField.value = "";
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;

}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = getCurrentBalance()

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;

    }
}


document.getElementById("deposit-button").addEventListener('click', function () {

    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount);
        updateBalance(depositAmount, true);
    }


    // using function
    // const depositAmount = getInputValue("deposit-input");

    // update deposit balance
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
 */

    // get and update deposit total
    // updateTotalField("deposit-total", depositAmount);

    /*     const depositTotal = document.getElementById("deposit-total");
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);
    
        depositTotal.innerText = previousDepositTotal + depositAmount;
     */

    // update total balance
    // using function
    // updateBalance(depositAmount, true);

    /*     const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal + depositAmount; */


    // clear
    // depositInput.value = "";
});



// handle withdraw button
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert("Insufficient balance");
    }

    // using function
    // const withdrawAmount = getInputValue("withdraw-input");

    /*     const withdrawInput = document.getElementById("withdraw-input");
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */


    // get and update withdraw total
    // using function
    // updateTotalField("withdraw-total", withdrawAmount);

    /*     const withdrawTotal = document.getElementById("withdraw-total");
        const withdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(withdrawTotalText);
    
        withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
     */

    // update total Balance
    // using function
    // updateBalance(withdrawAmount, false);

    /*     const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    // clear
    // withdrawInput.value = "";
});