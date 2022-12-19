function addPlayer(){

    /* pega o que está digitado no campo de posição */
    const position = document.getElementById('position').value;

    /* pega o que está digitado no campo nome */
    const name = document.getElementById('name').value;

    /* pega o que está digitado no campo numero */
    const number = document.getElementById('number').value;

    /* msg de confirmação se deseja escalar tal jogador com a posição tal */
    const confirmation = confirm("Escalar " + name + " como " + position + " para o time?");

    /* Em caso de a confirmação ser verdadeira (preenchida) */
    if(confirmation){
        
        /* Vai até a lista do time (ul) */
        const teamList = document.getElementById('teamList');

        /* Cria um elemento li dentro da lista do time (ul, id= teamList) */
        const playerItem = document.createElement('li');

        /* Na primeira linha apresentará campo de id e "player-(numero do jogador)" */
        playerItem.id = 'player-' + number;

        /* Na segunda linha apresentará a posição do jogador, nome e o número da camisa  */
        playerItem.innerText = position + ": " + name + "(" + number + ")";

        /* incluirá na lista ul o li com as especificações do playerItem */
        teamList.appendChild(playerItem);

        /* limpa os valores nos campos em que o usuario vê após ser inserido os dados */
        document.getElementById('position').value = '';

        document.getElementById('name').value = '';

        document.getElementById('number').value = '';

    }
}

function removePlayer(){

    /* referencia o number para pegar o valor digitado no campo do input com id especificado */
    const number = document.getElementById('numberToRemove').value;

    /* referencia o PlayerToRemove para pegar o que está escrito player- com o number */
    const playerToRemove = document.getElementById('player-' + number);

    /* manda msg de confirmação se deseja remover o jogador especifico, mostrando a posição, nome e numero do jogador */
    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + ' ?');

    if(confirmation){

        /* Seleciona a lista ul pelo id e remove o elemento filho especificado.
        */
        document.getElementById('teamList').removeChild(playerToRemove);
        /* outro jeito que seria possível era usando
        playerToRemove.remove();
        pois assim vc não precisa selecionar o elemento pai para remover o elemento filho. */

        /* limpa o campo que aparece para o usuario remover o jogador. */
        document.getElementById('numberToRemove').value = '';

    }
}