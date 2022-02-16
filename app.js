document.getElementById("calculate").addEventListener("click", function () {

    let incomeInputText = document.getElementById("income");
    let incomeInputAmount = parseFloat(incomeInputText.value);

    let foodInputText = document.getElementById("food");

    let foodInputAmount = parseFloat(foodInputText.value);

    let rentInputText = document.getElementById("rent");
    let rentAmount = parseFloat(rentInputText.value);

    let clothesText = document.getElementById("clothes");
    let clothesAmount = parseFloat(clothesText.value);

    let totalExpensesText = document.getElementById("total-expenses");

    let totalExpensesAmount = parseFloat(totalExpensesText.innerText);

    let TotalAmountADD = foodInputAmount + rentAmount + clothesAmount;

    let totalNewAmount = totalExpensesText.innerText = TotalAmountADD;

    let balanceText = document.getElementById("balance");
    let balanceAmount = parseFloat(balanceText);

    let newBalanceAmount = incomeInputAmount - totalNewAmount;

    let mainBalance = balanceText.innerText = newBalanceAmount;
})


document.getElementById("save-button").addEventListener("click", function () {

    let incomeInputText = document.getElementById("income");
    let incomeInputAmount = parseFloat(incomeInputText.value);


    let savingInputText = document.getElementById("save");
    let saveInputAmount = parseFloat(savingInputText.value);

    let savingAmountText = document.getElementById("saving-amount");
    let savingAmount = parseFloat(savingAmountText.innerText);
    let newSavingAmount = incomeInputAmount / saveInputAmount;

    let updateSavingAmount = savingAmountText.innerText = newSavingAmount;
    console.log(saveInputAmount);

    // Remaining Balance

    let balanceText = document.getElementById("balance");

    let balance = parseFloat(balanceText.innerText);

    let remainingBalanceTExt = document.getElementById("remaining-balance");

    let remainingBalance = parseFloat(remainingBalanceTExt.innerText);

    let newRemainingBalance = balance - updateSavingAmount;

    remainingBalanceTExt.innerText = newRemainingBalance;

})
