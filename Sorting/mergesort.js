function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Nếu còn phần tử ở mảng left, thêm vào kết quả
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    // Nếu còn phần tử ở mảng right, thêm vào kết quả
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};

const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSort(unsortedArray);
console.log("Mảng đã sắp xếp:", sortedArray);