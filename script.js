// globals
const container = document.getElementById('grid-container');
const btn = document.querySelector("button");


function createGrid() {

    const blocksPerLine = parseInt(prompt("How many blocks per line would you like?"), "10");
    console.log(blocksPerLine);
    // input check
    if (blocksPerLine < 1 || blocksPerLine > 100 || isNaN(blocksPerLine)) {
        alert('Wrong input. Enter a number between 1 and 100 please');
        createGrid();
    }

    const sizeBlock = calculBlockSize(blocksPerLine);

    // Create the grid
    for (let i = 0; i < blocksPerLine ** 2; i++) {

        const block = document.createElement('div');
        block.setAttribute('class', 'grid-block');
        block.setAttribute('style', `width: ${sizeBlock}px; height: ${sizeBlock}px`);
        
        container.append(block);
    }
}

function clearGrid() {

    const blocks = document.querySelectorAll('.grid-block');

    if (blocks.length == 0) {
        btn.textContent = "Erase and create a new grid";
        createGrid();
    } else {

        for (let i = 0; i < blocks.length; i++) {

            blocks[i].remove();
        }
 
        createGrid();
    }
}

function calculBlockSize(blocksPerLine) {

    // Calcul size of 1 block using container maxWidth
    const maxWidth = container.offsetWidth;

    const sizeBlock = Math.floor(maxWidth / blocksPerLine);

    // Needed because of the sizeBlock round down
    function adjustMaxWidth() {
        const newMaxWidth = blocksPerLine * sizeBlock;
        container.setAttribute('style', `max-width: ${newMaxWidth}px`);
    }
    adjustMaxWidth();

    return sizeBlock;
}

btn.addEventListener('click', clearGrid);