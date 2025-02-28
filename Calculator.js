function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) { //returns solution
    document.getElementById("result").value += value;
}

function calculate() {
    let calc = document.getElementById("result").value;
    if(calc.includes("%")) {
        size = calc.length;
        n = Number(calc.substring(0, size-1));
        calc = n/100;
    }else if(calc.includes("!")) {
        size = calc.length;
        n = Number(calc.substring(0, size-1));
        f = 1;

        for(i = 2; i <= n; i++)
            f = f*i;
        calc = f;
    }else{
        calc = eval(calc);

    }

    document.getElementById("result").value = calc;
}

