const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
    /* setando no value o Olá, sendo que no html o value é "vazio" */
    input.value = 'Olá'

    /* comportamento esperado é aparecer Olá por ter sido setado acima */
    console.log(input.value)

    /* pega o atributo predefinido (no caso no HTML) */
    console.log(input.getAttribute('value'))

    /* remove o atributo */
    /* console.log(input.removeAttribute('value')) */

    /* seta o atributo */
    /* console.log(input.setAttribute('value')) */
})

document.getElementById('type').addEventListener('click',function(){
    /* alternativa sem usar as palavras reservadas para mudar atributos HTML usando DOM */
    /* input.type = input.type !== 'radio' ? 'radio' : 'text' */

    /* alternativa para setar o type usando palavras reservadas para mudar atributos HTML usando DOM */
    if(input.type !== 'radio'){
        input.setAttribute('type','radio')
    } else {
        input.setAttribute('type','text')
    }
})

document.getElementById('placeholder').addEventListener('click',function(){
    if(input.placeholder == ''){
        input.setAttribute('placeholder','Preencha com algo...')
    } else {
        input.removeAttribute('placeholder')
    }
})

document.getElementById('disable').addEventListener('click',function(){
    if(input.disabled == false){
        input.setAttribute('disabled', 'true')
    } else {
        input.removeAttribute('disabled')
    }
})

document.getElementById('data').addEventListener('click',function(){
    const data = input.dataset.something
    console.log("O valor do atributo data-somenthing é " + data)
    input.dataset.something = 'algum outro valor'
    console.log("O valor do atributo data-somenthing agora é " + input.dataset.something)
})