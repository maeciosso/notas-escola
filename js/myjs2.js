const $btn = document.getElementById("btn")
let historicoNotas = []
const divMenu = document.getElementById("div")

$btn.addEventListener('click', function(){
    const nota1 = parseFloat(document.getElementById("1").value);
    const nota2 = parseFloat(document.getElementById("2").value);
    const nota3 = parseFloat(document.getElementById("3").value);
	const nota4 = parseFloat(document.getElementById("4").value);
    
    let notaFinal = nota1 + nota2 + nota3 + nota4;

    historicoNotas.unshift(notaFinal.toFixed(2))

        if (historicoNotas.length > 10) {
            historicoNotas.pop()
        }

        nota1.value = " ";
        nota2.value = " ";
        nota3.value = " ";
        nota4.value = " ";

        atualizarNotas()
});

function atualizarNotas(){
    let $ul = document.getElementById('ul');
    $ul.innerHTML = ''; 
    historicoNotas.forEach(function (notaFinal) {
        let $li = document.createElement('li');

        let resultado = "media anual de " + (notaFinal / 4) + " ponto(s)";

        $li.innerText = resultado
        $ul.appendChild($li);
    })
}


menu.addEventListener("click", () => {
    divMenu.classList.toggle("hide")
})