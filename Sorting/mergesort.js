function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Chia mảng thành hai phần
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Đệ quy để sắp xếp từng phần
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Hợp nhất hai mảng đã sắp xếp
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // So sánh từng phần tử của hai mảng và hợp nhất theo thứ tự tăng dần
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

// Ví dụ sử dụng
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSort(unsortedArray);
console.log("Mảng đã sắp xếp:", sortedArray);