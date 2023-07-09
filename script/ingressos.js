const ArrayBotaoMenos = document.querySelectorAll('.botao-menos')
const ArrayBotaoMais = document.querySelectorAll('.botao-mais')
const Input1 = document.querySelector("#input1")
const Input2 = document.querySelector("#input2")
const Input3 = document.querySelector("#input3")
const Input4 = document.querySelector("#input4")
const InputTotal = document.querySelector(".total")
const ValorTotal = document.querySelector(".valor-total")
const RealizarPedido = document.querySelector(".pista button")
const Modal = document.querySelector("dialog")
const cpf = document.querySelector("#cpf")
const tel = document.querySelector("#tel")
const valorTotalModal = document.querySelector('#valor-total-modal')
const quantModal = document.querySelector('#quant-modal')
const btnComprar = document.querySelector("#btn-comprar")
const btnCancelar = document.querySelector("#btn-cancelar")
const containerIngressos = document.querySelector(".container-ingressos")
const pedido = document.querySelector(".pedido")
var nome = document.querySelector("#name")
var email = document.querySelector("#email")
var endereco = document.querySelector("#endereco")
var ddd = document.querySelector("#ddd")
const modalSelecione = document.querySelector(".selecione")
const modalPreencha = document.querySelector(".preencha")
const btnOk = document.querySelector(".btn-ok")
const btnOk2 = document.querySelector(".btn-ok2")

let quant;
let total = 0;
let valor;

RealizarPedido.addEventListener('click', FunModal)

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if(cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    }
    else if (cpflength === 11) {
        cpf.value += '-'
    }
})

tel.addEventListener('keypress', () => {
    let tellength = tel.value.length

    if(tellength === 5) {
        tel.value += '-'
    }
})

for(var i = 0; i < ArrayBotaoMenos.length; i++){
    ArrayBotaoMenos[i].addEventListener('click', function() {FunDiminui(this.id)})
    ArrayBotaoMais[i].addEventListener('click', function() {FunAumenta(this.id)})
}

btnCancelar.addEventListener('click', () => {
    Modal.close()
    tel.setAttribute('value', '')
})

btnComprar.addEventListener('click', () => {
    if(nome.value === '' || email.value === '' || ddd.value === '' || tel.value === '' || endereco.value === '' || cpf.value === '') {
        modalPreencha.showModal()
    }
    else {
        Modal.close()
        containerIngressos.style.display = "none"
        pedido.style.display = "flex"
        document.querySelector("#nome-pedido").setAttribute('value', nome.value)
        document.querySelector("#email-pedido").setAttribute('value', email.value)
        document.querySelector("#ddd-pedido").setAttribute('value', ddd.value)
        document.querySelector("#tel-pedido").setAttribute('value', tel.value)
        document.querySelector("#endereco-pedido").setAttribute('value', endereco.value)
        document.querySelector("#cpf-pedido").setAttribute('value', cpf.value)
        document.querySelector("#valor-total-pedido").setAttribute('value', valorTotalModal.value)
        document.querySelector("#quant-pedido").setAttribute('value', quantModal.value)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
})

btnOk.addEventListener('click', () => {
    modalSelecione.close()
})

btnOk2.addEventListener('click', () => {
    modalPreencha.close()
})


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
    valor = (800 * parseInt(Input1.value)) +  (400 * parseInt(Input2.value)) + (600 * parseInt(Input3.value)) + (300 * parseInt(Input4.value))
    ValorTotal.setAttribute('value','R$' + valor + ',00')
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
    valor = (800 * parseInt(Input1.value)) +  (400 * parseInt(Input2.value)) + (600 * parseInt(Input3.value)) + (300 * parseInt(Input4.value))
    ValorTotal.setAttribute('value','R$' + valor + ',00')
    total = parseInt(Input1.value) + parseInt(Input2.value) + parseInt(Input3.value) + parseInt(Input4.value)
    InputTotal.setAttribute('value', total)
}

function FunModal() {
    if(total === 0){
        modalSelecione.showModal()
    }
    else{
        Modal.showModal()
    valorTotalModal.setAttribute('value', ValorTotal.value)
    if(total === 1) {
        quantModal.setAttribute('value', InputTotal.value + "x Ingresso")
    }
    else{
        quantModal.setAttribute('value', InputTotal.value + "x Ingressos")
    }
    }
}