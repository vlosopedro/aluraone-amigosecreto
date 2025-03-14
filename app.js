
let amigos = [];// Array para armazenamento de nomes

//Função para os nomes digitados no campo de texto serem adicionados ao array amigos
function adicionarAmigo() {
    let nomeDigitado = document.getElementById("amigo").value;  //captura o input digitado (Nome)
    if (nomeDigitado == "") {   //valida se o valor de entrada não é vazio
        alert("Por favor, insira um nome");   //caso seja vazio a mensagem é mostrada
        //} else if (amigos.includes(nomeDigitado)) {  // Opção ao innerHTML, Verifica se o nome já foi adicionado, para evitar homônimos no sorteio
        //   alert("Este nome já foi adicionado!");   // Se sim, avisa que o nome já existe
    } else {
        amigos.push(nomeDigitado); //adiciona os nomes ao array com o metodo .push()
        document.getElementById("amigo").value = ""; //limpa o campo de texto após armazenar o um nome ao array
        atualizarLista(amigos);
    }
}
// Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");   // Seleciona a lista html onde serão exibidos os nomes
    lista.innerHTML = "";  //Limpa a lista antes de adicionar novos nomes para evitar duplicatas

    for (let i = 0; i < amigos.length; i++) { //Laço de repetição (Loop) para percorrer o array amigos e verificar todos os nomes contidos nele 
        let item = document.createElement("li"); // Cria o item de lista que irá tornar nomes em formato de lista <li>
        item.innerHTML = amigos[i]; // Define o nome do amigo no conteudo de cada item da lista iterando por eles 
        lista.appendChild(item); // Adiciona os nomes em formato <li> na <ul> selecionada
    }
}
// Função para sortear os nomes de amigos
function sortearAmigo() {
    if (amigos.length == 0) { //Verifica se o array amigos está vazio 
        alert("Por favor, insira um nome."); //Se estiver esta mensagem aparece
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Gera um indice aleatorio entre os nomes da array
    let nomeSorteado = amigos[indiceAleatorio];//Seleciona um nome aleatorio dentro da array 
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`; //Exibe o nome aleatório selecionado na pagina HTML 

}

function reiniciarSorteio() {
    amigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}