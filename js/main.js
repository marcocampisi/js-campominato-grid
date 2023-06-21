const gridContainer = document.querySelector('#grid-container');

const easyButton = document.querySelector('#easyButton');
const normalButton = document.querySelector('#normalButton');
const hardButton = document.querySelector('#hardButton');

easyButton.addEventListener('click', function() {
    selectDifficulty('facile');
});

normalButton.addEventListener('click', function() {
    selectDifficulty('normale');
});

hardButton.addEventListener('click', function() {
    selectDifficulty('difficile');
});

function selectDifficulty(difficulty) {
    let gridSize;

    switch (difficulty) {
        case 'facile':
            gridSize = 100;
            break;
        case 'normale':
            gridSize = 81;
            break;
        case 'difficile':
            gridSize = 49;
            break;
        default:
            console.log('Difficoltà non valida');
            return;
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 1; i <= gridSize; i++) {
        const mySquare = document.createElement('div');
        mySquare.classList.add('myCell')
        mySquare.append(i);
        mySquare.addEventListener('click', function() {
            this.classList.toggle('active');
            console.log(this.innerHTML);
        });
    
        gridContainer.append(mySquare);
    
    }
}