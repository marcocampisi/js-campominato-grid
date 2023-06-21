const gridContainer = document.querySelector('#grid-container');

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
