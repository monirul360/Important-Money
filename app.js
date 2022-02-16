
function inputValue(id) {
    let inputText = document.getElementById(id);
    let inputAmount = parseFloat(inputText.value);
    return inputAmount;
}

function selectFunction(select) {
    let selectTotal = document.getElementById(select);
    return selectTotal;
}

document.getElementById("calculate").addEventListener("click", function () {
    let incomeInputAmount = inputValue("income");
    let foodInputAmount = inputValue("food");
    let rentInputAmount = inputValue("rent");
    let clothesAmount = inputValue("clothes");
    let totalExpensText = selectFunction("total-expenses");
    // totalExpenses add
    let totalExpensAdd = foodInputAmount + rentInputAmount + clothesAmount;
    let totalExpensAmount = totalExpensText.innerText = totalExpensAdd;

    let balanceText = selectFunction("balance");
    // balance  update
    let BalanceAmount = incomeInputAmount - totalExpensAmount;
    balanceText.innerText = BalanceAmount;
})

document.getElementById("save-button").addEventListener("click", function () {

    let incomeInputAmount = inputValue("income");

    let saveInputAmount = inputValue("save");

    let savingAmountText = selectFunction("saving-amount")
    // saving amount
    let savingAmount = incomeInputAmount * saveInputAmount / 100;

    let updateSavingAmount = savingAmountText.innerText = savingAmount;

    let balanceText = selectFunction("balance");

    let balance = parseFloat(balanceText.innerText);

    let remainingText = selectFunction("remaining-balance");
    // Remaining Balance
    let remainingBalance = balance - updateSavingAmount;

    remainingText.innerText = remainingBalance;

})
