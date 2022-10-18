function calculate() {
    var operator = window.document.getElementById("operators")
    var box1 = window.document.getElementById("number1")
    var box2 = window.document.getElementById("number2")
    var resp = window.document.getElementById("resp")
            
    variable_op = String(operator.value)
    number_one = Number(box1.value)
    number_two = Number(box2.value)

    if (variable_op == '+') {
        result = number_one + number_two
        resp.innerHTML = (`A soma entre ${number_one} e ${number_two} é: ${result}`)
    } else if (variable_op == '-') {
        result = number_one - number_two
        resp.innerHTML = (`A subtração entre ${number_one} e ${number_two} é: ${result}`)
    } else if (variable_op == 'x') {
        result = number_one * number_two
        resp.innerHTML = (`A multiplicação entre ${number_one} e ${number_two} é: ${result}`)
    } else if (variable_op == '/') {
        result = number_one / number_two
        resp.innerHTML = (`A divisão entre ${number_one} e ${number_two} é: ${result}`)
    }
} 