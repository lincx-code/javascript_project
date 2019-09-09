var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
            
btn5.onclick = function() {
    let num1 = btn1.innerHTML;
    let num2 = btn2.innerHTML;
    let num3 = btn3.innerHTML;
    let num4 = btn4.innerHTML;
    let num6 = btn6.innerHTML;
    let num7 = btn7.innerHTML;
    let num8 = btn8.innerHTML;
    let num9 = btn9.innerHTML;

    btn1.innerHTML = num4;
    btn2.innerHTML = num1;
    btn3.innerHTML = num2;
    btn4.innerHTML = num7;
    btn6.innerHTML = num3;
    btn7.innerHTML = num8;
    btn8.innerHTML = num9;
    btn9.innerHTML = num6;
};