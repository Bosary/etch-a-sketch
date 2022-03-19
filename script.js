function createBlock() {
    const container = document.getElementById('grid-container');

    // Create 16 div blocks
    for (let i = 0; i < 16 * 16; i++) {

        const block = document.createElement('div');
        block.setAttribute('class', 'grid-block');
        
        container.append(block);
    }
}

createBlock();