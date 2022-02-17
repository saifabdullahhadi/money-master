
function getIncome() {
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const inputFood = document.getElementById('food-input');
    const inputFoodDigit = inputFood.value;
    const inputRent = document.getElementById('rent-input');
    const inputRentDigit = inputRent.value;
    const inputCloth = document.getElementById('cloth-input');
    const inputClothDigit = inputCloth.value;
    if (income == '' || income == null || inputFoodDigit == '' || inputFoodDigit == null || inputRentDigit == '' || inputRentDigit == null || inputClothDigit == '' || inputClothDigit == null) {
        const errorText = document.getElementById('type-number');
        errorText.style.display = 'block';
    }
    else {
        const totalEspenses = Number(inputFoodDigit) + Number(inputRentDigit) + Number(inputClothDigit);
        const exprenceValue = document.getElementById('total-expns');
        exprenceValue.innerText = parseFloat(totalEspenses);
        const inputField = document.getElementById('income-input');
        const inputValue = inputField.value;
        const balanceTotal = document.getElementById('balance-value');
        balanceTotal.innerText = parseFloat(inputValue) - parseFloat(totalEspenses);
        balanceManinTotal = balanceTotal.innerText;
    }

};
document.getElementById('save-button').addEventListener('click', function () {
    const saveValue = document.getElementById('save-input');
    const saveMain = saveValue.value;
    const incomeInputMain = document.getElementById('income-input');
    const income = incomeInputMain.value;
    const saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = parseFloat(income) * parseFloat(saveMain) / 100;
    saveAmountMain = saveAmount.innerText;
    const remainBalance = document.getElementById('remain-balance');
    remainBalance.innerText = balanceManinTotal - saveAmountMain;
});




/*
function getIncome() {
    const inputFood = document.getElementById('food-input');
    const inputFoodDigit = inputFood.value;
    const inputRent = document.getElementById('rent-input');
    const inputRentDigit = inputRent.value;
    const inputCloth = document.getElementById('cloth-input');
    const inputClothDigit = inputCloth.value;
    const totalEspenses = Number(inputFoodDigit) + Number(inputRentDigit) + Number(inputClothDigit);
    const exprenceValue = document.getElementById('total-expns');
    exprenceValue.innerText = parseFloat(totalEspenses);
    const inputField = document.getElementById('income-input');
    const inputValue = inputField.value;
    const balanceTotal = document.getElementById('balance-value');
    balanceTotal.innerText = parseFloat(inputValue) - parseFloat(totalEspenses);
    balanceManinTotal = balanceTotal.innerText;
};
document.getElementById('save-button').addEventListener('click', function () {
    const saveValue = document.getElementById('save-input');
    const saveMain = saveValue.value;
    const incomeInputMain = document.getElementById('income-input');
    const income = incomeInputMain.value;
    const saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = parseFloat(income) * parseFloat(saveMain) / 100;
    saveAmountMain = saveAmount.innerText;
    const remainBalance = document.getElementById('remain-balance');
    remainBalance.innerText = balanceManinTotal - saveAmountMain;
});
*/
