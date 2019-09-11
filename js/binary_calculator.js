var res = document.getElementById('res');
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnClr = document.getElementById('btnClr');
var btnEql = document.getElementById('btnEql');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');

//general action for buttons
function action(e){
    var btn = e.target || e.srcElement;
    res.innerHTML += document.getElementById(btn.id).innerHTML;
}

//function for clicking the clear button
btnClr.onclick = () => res.innerHTML = "";

//function for clicking the equal button
function actionEql() {
    let input = res.innerHTML;
    let output = [];
    let str = "";

    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) === '+' || input.charAt(i) === '-' || input.charAt(i) === '*' || input.charAt(i) === '/'){
            //convert binary to decimal then push to array
            output.push(parseInt(str, 2));
            output.push(input.charAt(i));
            str = "";
        }else if(i == input.length - 1){
            str += input.charAt(i) + input.charAt(i+1);
            //convert binary to decimal then push to array
            output.push(parseInt(str, 2));
        }else{
            str += input.charAt(i);
        }
    }

    //do the caculation
    actionResult(output);
}

//function for doing calcuation
function actionResult(input) {
    let result = 0;
    let equation = "";
    for(let i = 0; i < input.length; i++) {
        equation += input[i];
    }
    result = eval(equation);
    
    //convert decimal to binary
    res.innerHTML = result.toString(2);
}

//add action to other buttons
btn0.onclick = action;
btn1.onclick = action;
btnEql.onclick = actionEql;
btnSum.onclick = action;
btnSub.onclick = action;
btnMul.onclick = action;
btnDiv.onclick = action;
