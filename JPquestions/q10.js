function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += '* ';
        }
        console.log(row);
    }
}


displayPattern(4, 5);
