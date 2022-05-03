var equation = "";
var res;

function btn1() {
    equation += "1";

    document.getElementById("display").value = equation;
}

function btn2() {
    equation += "2";

    document.getElementById("display").value = equation;
}

function btn3() {
    equation += "3";

    document.getElementById("display").value = equation;
}

function btn4() {
    equation += "4";

    document.getElementById("display").value = equation;
}

function btn5() {
    equation += "5";

    document.getElementById("display").value = equation;
}

function btn6() {
    equation += "6";

    document.getElementById("display").value = equation;
}

function btn7() {
    equation += "7";

    document.getElementById("display").value = equation;
}

function btn8() {
    equation += "8";

    document.getElementById("display").value = equation;
}

function btn9() {
    equation += "9";

    document.getElementById("display").value = equation;
}

function btn0() {
    equation += "0";

    document.getElementById("display").value = equation;
}

function btnTimes() {
    equation += "*";

    document.getElementById("display").value = equation;
}

function btnDivision() {
    equation += "/";

    document.getElementById("display").value = equation;
}

function btnMinus() {
    equation += "-";

    document.getElementById("display").value = equation;
}

function btnPlus() {
    equation += "+";

    document.getElementById("display").value = equation;
}

function btnDot() {
    equation += ".";

    document.getElementById("display").value = equation;
}

function exponentiation() {
    equation += "**"

    document.getElementById("display").value = equation;
}

function leftParenthesis() {
    equation += "("

    document.getElementById("display").value = equation;
}

function rightParenthesis() {
    equation += ")"

    document.getElementById("display").value = equation;
}

function btnEquals() {
    res = eval(equation);

    document.getElementById("display").value = res;
}

function btnCancel() {
    equation = "";

    document.getElementById("display").value = equation;
}
