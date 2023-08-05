function bubble_sort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bubble_sort([9, 10, 99, 87, 52]);

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = 0; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (
          array[i] > array[j - 1] &&
          array[i] < array[j]
        ) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
