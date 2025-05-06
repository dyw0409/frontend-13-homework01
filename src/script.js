const bill = document.querySelector('.calculator__bill input');
const people = document.querySelector('.calculator__people input');
const tipOptions = document.querySelectorAll('.tip-option');
const tipLabel = document.querySelector('.tip-label');
const reset = document.querySelector('.calculator__reset');
const tip = document.querySelector('.tip-amount');
const total = document.querySelector('.total-amount');
const customTipInput = tipLabel; 


reset.addEventListener('click', () => {
    bill.value = "";
    people.value = '';
    tip.textContent = "$0.00";
    total.textContent = "$0.00";
    tipLabel.value = "";
});


let tipValue = 0;

tipOptions.forEach(button => {
    button.addEventListener('click', (event) => {
        tipValue = parseInt(event.target.textContent.trim());
        customTipInput.value = ''; 
        calculate();
    });
});

tipLabel.addEventListener('input',()=>{
    const custom = Number(tipLabel.value);
    if(custom >=0 ) tipValue = custom;
    calculate();
})


bill.addEventListener('input',()=>{
    calculate();
});

people.addEventListener('input',()=>{
    calculate();
});

function calculate(){
    const billValue = Number(bill.value);
    const peopleValue = Number(people.value);

    if(billValue >0 && peopleValue > 0){
        const tipAmount = (billValue * tipValue) / 100;
        const totalAmount = billValue +tipAmount;

        tip.textContent = "$" + (tipAmount/ peopleValue).toFixed(2);
        total.textContent= "$" + (totalAmount / peopleValue).toFixed(2);
    }
}
