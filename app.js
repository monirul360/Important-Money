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


