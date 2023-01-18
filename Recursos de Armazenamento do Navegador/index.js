//botao de guardar do session storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})
    
//botao de ler do session storage
document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

//botao de guardar do local storage
document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

//botao de ler do local storage
document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text')
    alert('O texto salvo no local storage é: ' + t)
})

//mexendo com cookies botao 1
document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

//mexendo com cookies botao 2
document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})