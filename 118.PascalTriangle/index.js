function generatePascalTriangle(numRows){
    const triangle = [];
    for(let i = 0; i  < numRows; i++){
        const row = [1];
        for(let j = 1; j < i; i++){
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            console.log('row', row);
        }
        if(i > 0) row.push(1);
        triangle.push(1);
    }
    return triangle;
}
console.log(generatePascalTriangle(4));