
function insert (num) {
    let numero = document.querySelector(".res").innerHTML;
    document.querySelector(".res").innerHTML = numero + num;
}

function clean () {
    document.querySelector(".res").innerHTML = "";
    
}

function calcular() {
   let numero = document.querySelector(".res").innerHTML;
   if (numero) {
    document.querySelector(".res").innerHTML = eval(numero);
   } else {
    document.querySelector(".res").innerHTML = "Nada...";
   }
}


function myFunction () {
    
    let btt = document.querySelector(".body").classList.toggle("teste");

    document.querySelector(".numeros").classList.toggle("change");

    document.querySelector("#um").classList.toggle("num");
    document.querySelector("#dois").classList.toggle("num");
    document.querySelector("#tres").classList.toggle("num");
    document.querySelector("#quatro").classList.toggle("num");
    document.querySelector("#cinco").classList.toggle("num");
    document.querySelector("#seis").classList.toggle("num");
    document.querySelector("#sete").classList.toggle("num");
    document.querySelector("#oito").classList.toggle("num");
    document.querySelector("#nove").classList.toggle("num");
    document.querySelector("#dez").classList.toggle("num");
    document.querySelector("#mais").classList.toggle("num");
    document.querySelector("#menos").classList.toggle("num");
    document.querySelector("#vezes").classList.toggle("num");
    document.querySelector("#divisao").classList.toggle("num");

    document.querySelector(".resultado").classList.toggle("re");

    document.querySelector(".botao").classList.toggle("btt");    
};





