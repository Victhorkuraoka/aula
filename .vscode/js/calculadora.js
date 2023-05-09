let input = document.getElementById("input")


function addVisor(valor){
    input.value += valor 
}

function calcular(){

    input.value = eval(input.value)
}

function clear(){

    input.value = "";
}