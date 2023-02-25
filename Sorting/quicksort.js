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
  
  function quickSort(array, low, high) {
    if (low < high) {
      var pi = partition(array, low, high);
  
      quickSort(array, low, pi - 1);
  
      quickSort(array, pi + 1, high);
    }
  }
  
  let arr = [3, 5, -2, 14, -9, 30];
  quickSort(arr, 0, arr.length - 1);
  console.log("result",arr);