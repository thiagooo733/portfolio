//Função para mudar cor da header e posição do botão ao scrollar

window.addEventListener("scroll", scrollar);
window.addEventListener("scroll", depoimento);

function scrollar() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("homeheader").style.backgroundColor = "var(--cor3)";
    document.getElementById("botao_descer").style.transform = "scaleY(-1)";
    document.getElementById("botao_descer").style.top = "0px";
  } else {
    document.getElementById("homeheader").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("botao_descer").style.transform = "scaleY(1)";
    document.getElementById("botao_descer").style.top = "550px";
  }
}

//Função para abrir menu de navegação ao clicar no ícone

function menu(){
    barra = document.getElementById("naveg");
    if ((barra.style.visibility) == "hidden"){
        barra.style.visibility = "visible";
        barra.style.opacity = "1";
    }
    else{
        barra.style.visibility = "hidden";
        barra.style.opacity = "0";
    }
}

//Função para mudar texto a cada 3s

function timer() {

    if ((document.getElementById("digi").innerHTML) == "sua empresa"){
        document.getElementById("digi").innerHTML = "você";
    }
    else{
        document.getElementById("digi").innerHTML = "sua empresa";
    }

    setTimeout(timer, 3000);
}

timer();

//Função para piscar o cursor a cada 0.5s

function cursor() {

    if ((document.getElementById("cursor").style.display) == "none"){
        document.getElementById("cursor").style.display = "inline";
    }
    else{
        document.getElementById("cursor").style.display = "none";
    }

    setTimeout(cursor, 500);
}

cursor();

//Função para descer os subir com botão

function descersubir(){
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, 1000);
    }
}

//Função da tela de carregamento e abrir nova página
valor_id_clicado = 0;
function loading(id_clicado) {

    valor_id_clicado = parseInt(id_clicado);

    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("loading").style.opacity = "1";

    pontos();

    function pontos() {
        if ((document.getElementById("pontos").innerHTML) == ""){
            document.getElementById("pontos").innerHTML = ".";
        }
        else if ((document.getElementById("pontos").innerHTML) == "."){
            document.getElementById("pontos").innerHTML = "..";
        }
        else if ((document.getElementById("pontos").innerHTML) == ".."){
            document.getElementById("pontos").innerHTML = "...";
        }
    
        setTimeout(pontos, 333);
    }

    setTimeout(mudarpagina, 1000);
    
}

function mudarpagina() {
    if (valor_id_clicado == 1){
        window.location.href = "index.html";
    }
    else if (valor_id_clicado == 2){
        window.location.href = "sobre.html";
    }
    else if (valor_id_clicado == 3){
        window.location.href = "projetos.html";
    }
    else if (valor_id_clicado == 4){
        window.location.href = "depoimentos.html";
    }
    else if (valor_id_clicado == 5){
        window.location.href = "compre.html";
    }
    else if (valor_id_clicado == 6){
        window.location.href = "contato.html";
    }
}

//Funções dos formulários
function exibirmsg(){
    document.getElementById("redirect").style.display = "block";
}

function escondermsg(){
    document.getElementById("redirect").style.display = "none";
}

function contatoEnviar(){
    document.getElementById("desfocar").style.display = "block";
}

function fechar(){
    location.reload();
}

function expandir(){
    document.getElementById("lista").style.display = "block";
    document.getElementById("expandir").innerHTML = "<button onclick='esconder()' >(Clique aqui para esconder)</button>";
}

function esconder(){
    document.getElementById("lista").style.display = "none";
    document.getElementById("expandir").innerHTML = "(É importante saber de algumas coisas antes de preencher.<button onclick='expandir()' > Clique aqui para expandir)</button>";
}

//Função expandir depoimentos

function depoimento() {
    if (document.documentElement.scrollTop < 250) {
        document.getElementById("depo1").style.width = "600px";
        document.getElementById("depo2").style.width = "400px";
        document.getElementById("depo3").style.width = "400px";
        document.getElementById("depo4").style.width = "400px";
        document.getElementById("depo5").style.width = "400px";
    }
    else if ((document.documentElement.scrollTop >= 250) && (document.documentElement.scrollTop < 550)) {
        document.getElementById("depo1").style.width = "400px";
        document.getElementById("depo2").style.width = "600px";
        document.getElementById("depo3").style.width = "400px";
        document.getElementById("depo4").style.width = "400px";
        document.getElementById("depo5").style.width = "400px";
    }
    else if ((document.documentElement.scrollTop >= 550) && (document.documentElement.scrollTop < 850)) {
        document.getElementById("depo1").style.width = "400px";
        document.getElementById("depo2").style.width = "400px";
        document.getElementById("depo3").style.width = "600px";
        document.getElementById("depo4").style.width = "400px";
        document.getElementById("depo5").style.width = "400px";
    }
    else if ((document.documentElement.scrollTop >= 1150) && (document.documentElement.scrollTop <= 1450)) {
        document.getElementById("depo1").style.width = "400px";
        document.getElementById("depo2").style.width = "400px";
        document.getElementById("depo3").style.width = "400px";
        document.getElementById("depo4").style.width = "600px";
        document.getElementById("depo5").style.width = "400px";
    }
    else if (document.documentElement.scrollTop > 1450) {
        document.getElementById("depo1").style.width = "400px";
        document.getElementById("depo2").style.width = "400px";
        document.getElementById("depo3").style.width = "400px";
        document.getElementById("depo4").style.width = "400px";
        document.getElementById("depo5").style.width = "600px";
    }
}
