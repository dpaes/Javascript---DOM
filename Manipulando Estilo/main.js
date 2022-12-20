function useLightTheme(){
    document.body.style.color ='#212529';
    document.body.style.backgroundColor = '#f1f5f9';
}

function useDarkTheme(){
    document.body.style.color ='#f1f5f9';
    document.body.style.backgroundColor = '#212529';
}

function switchTheme(){
    document.body.classList.toggle('is-light');
    document.body.classList.toggle('is-dark');
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme);
document.getElementById('darkBtn').addEventListener('click', useDarkTheme);
document.getElementById('switchBtn').addEventListener('click', switchTheme);


/* Nesse exercicio, não é possível usar o switch e os outros 2 botões alternando entre o switch e os outros dois
pois a prioridade é sempre o inline, logo que mudar para o botão light e dark theme, o switch não vai funcionar por causa do inline.
em um projeto real favor escolher qual dos dois usar. */