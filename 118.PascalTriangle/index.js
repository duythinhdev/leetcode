function generatePascalTriangle(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = [1]; // phần tử đầu luôn là 1

        for (let j = 1; j < i; j++) {
            // phần tử giữa = tổng 2 phần tử trên nó
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        if (i > 0) row.push(1); // phần tử cuối luôn là 1 (trừ dòng 0)
        triangle.push(row);
    }

    return triangle;
}

console.log(generatePascalTriangle(7));