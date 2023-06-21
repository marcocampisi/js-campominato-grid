const gridContainer = document.querySelector('#grid-container');

for (let i = 1; i <= 100; i++) {
    const mySquare = document.createElement('div');
    mySquare.classList.add('myCell')
    mySquare.append(i);
    mySquare.addEventListener('click', function() {
        this.classList.toggle('active');
        console.log(this.innerHTML);
    });

    gridContainer.append(mySquare);

}