function strToNumber(id){
    const str = document.getElementById(id);
    const strValue = str.innerText
    const number = parseInt(strValue)
    return number
}

function inputToNumber(id){
    const str = document.getElementById(id);
    const strValue = str.value;
    const number = parseInt(strValue)
    return number
}
function formValdation(){
    const expence = document.querySelector('#expence')
    const balance = document.querySelector('#balance')
    // for (const input of inputs) {
        if(isNaN(expence, balance)){
            alert('All input are requared')
        }
        else{return}
    
}

document.getElementById('calc').addEventListener('click', function(){
    const income = inputToNumber('income')
    const food = inputToNumber('food')
    const rent = inputToNumber('rent')
    const cloth = inputToNumber('cloth')
    const expenceCalculation = food + rent + cloth;
    const balance = income - expenceCalculation;
    document.getElementById('expence').innerText = expenceCalculation
    document.getElementById('balance').innerText = balance;
     
})

document.getElementById('savings').addEventListener('click',function(){
    const income = inputToNumber('income')
    const savingAmountInPercent = inputToNumber('savingInPercent')
    let calculateSavings = (income / 100) * savingAmountInPercent;
    document.getElementById('savingAmount').innerText = calculateSavings;
    const previousBalence = strToNumber('balance')
    const remainingBalence =   previousBalence - calculateSavings;
    document.getElementById('remaining').innerText = remainingBalence;
})