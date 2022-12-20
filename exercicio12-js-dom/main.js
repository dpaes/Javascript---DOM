function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

const addTechButton = document.getElementById('newTech');
const form = document.getElementById('devForm');
const developers = [];
let inputRows = 0;

addTechButton.addEventListener('click', function (ev){
    const techLines = document.getElementById('techLines');
    
    const newRow = document.createElement('li');
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel('Experiência: ', 'techExpInfo')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio') 
    const expLabel1 = createLabel('0-2 anos', 'id1')
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio') 
    const expLabel2 = createLabel('3-4 anos', 'id2')
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio') 
    const expLabel3 = createLabel('5+ anos', 'id3')

    const removeRowButton = document.createElement('button')
    removeRowButton.type = 'button'
    removeRowButton.innerText = 'Remover Linha'
    removeRowButton.addEventListener('click',function(){
        techLines.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3,removeRowButton
    )

    techLines.appendChild(newRow);
})

form.addEventListener('submit', function(ev){
    ev.preventDefault();

    const devNameInput = document.getElementById('devName');
    const inputRows = document.querySelectorAll('.inputRow');

    let technologies = [];

    inputRows.forEach(function (row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp})
    })
    const newDev = {devName: devNameInput.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    devName.value = '';
    inputRows.forEach(function(row) {
        row.remove()
    })

    console.log(developers)
})
