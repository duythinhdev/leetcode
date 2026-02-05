function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;
  
    for (var j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}
const quickSort = (array, low, high) => {
    if (low < high) {
      const pi = partition(array, low, high);
      console.log('pi',pi)

      quickSort(array, low, pi - 1);

      quickSort(array, pi + 1, high);
    }
}
  
  let arr = [3, 5, -2, 14, -9, 30];
  quickSort(arr, 0, arr.length - 1);
  console.log("result",arr);