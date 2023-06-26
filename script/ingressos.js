const ArrayBotaoMenos = document.querySelectorAll('.botao-menos')
const ArrayBotaoMais = document.querySelectorAll('.botao-mais')
const Input1 = document.querySelector("#input1")
const Input2 = document.querySelector("#input2")
const Input3 = document.querySelector("#input3")
const Input4 = document.querySelector("#input4")
const InputTotal = document.querySelector(".total")

let quant;
let total;

for(var i = 0; i < ArrayBotaoMenos.length; i++){
    ArrayBotaoMenos[i].addEventListener('click', function() {FunDiminui(this.id)})
    ArrayBotaoMais[i].addEventListener('click', function() {FunAumenta(this.id)})
}



function FunDiminui(par_id) {
    if(par_id == "-button1" && Input1.value > 0){
        quant = Input1.value--
        Input1.setAttribute('value', quant)
    } else if(par_id == "-button2" && Input2.value > 0){
        quant = Input2.value--
        Input2.setAttribute('value', quant)
    } else if(par_id == "-button3" && Input3.value > 0){
        quant = Input3.value--
        Input3.setAttribute('value', quant)
    } else if(par_id == "-button4" && Input4.value > 0){
        quant = Input4.value--
        Input4.setAttribute('value', quant)
    }
    total = parseInt(Input1.value) + parseInt(Input2.value) + parseInt(Input3.value) + parseInt(Input4.value)
    InputTotal.setAttribute('value', total)
}

function FunAumenta(par_id) {
    if(par_id == "+button1" && Input1.value <2){
        quant = Input1.value++
        Input1.setAttribute('value', quant)
    } else if(par_id == "+button2" && Input2.value <2){
        quant = Input2.value++
        Input2.setAttribute('value', quant)
    } else if(par_id == "+button3" && Input3.value <2){
        quant = Input3.value++
        Input3.setAttribute('value', quant)
    } else if(par_id == "+button4" && Input4.value <2){
        quant = Input4.value++
        Input4.setAttribute('value', quant)
    }
    total = parseInt(Input1.value) + parseInt(Input2.value) + parseInt(Input3.value) + parseInt(Input4.value)
    InputTotal.setAttribute('value', total)
}