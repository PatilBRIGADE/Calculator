function appendToDisplay(value) {
    document.getElementById('input').value += value;
}

function clearDisplay() {
    document.getElementById('input').value = '';
}

function calculate() {
    let expression = document.getElementById('input').value;
    let result = eval(expression);
    document.getElementById('input').value = result;
}

window.addEventListener('keydown', function(x){
    if((x.keyCode>=48 && x.keyCode<=57) || ( x.keyCode == 189 || x.keyCode == 191) ){
        appendToDisplay(`${x.key}`);
    }
    if(x.keyCode==187){
        calculate();
    }
    if(x.keyCode==67){
        clearDisplay();
    }
    console.log(x.key+"=>"+x.keyCode)
    // console.log()
})